'use client';

import { useState, useMemo } from 'react';
import {
    Heart,
    MessageCircle,
    Share2,
    Send,
    Loader2,
    AlertCircle,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';
import { toast } from 'sonner';

const COMMENTS_PER_PAGE = 10;

const BlogInteractions = ({ blogId, initialLikes, initialComments = [], userLikedInitially }) => {
    const [likes, setLikes] = useState(initialLikes || 0);
    const [isLiked, setIsLiked] = useState(userLikedInitially || false);
    const [comments, setComments] = useState(initialComments);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [commentForm, setCommentForm] = useState({ name: '', email: '', content: '' });
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(comments.length / COMMENTS_PER_PAGE);
    const paginatedComments = useMemo(
        () => comments.slice((currentPage - 1) * COMMENTS_PER_PAGE, currentPage * COMMENTS_PER_PAGE),
        [comments, currentPage]
    );

    const handleLike = async () => {
        // Optimistic Update
        const newLikedState = !isLiked;
        setIsLiked(newLikedState);
        setLikes(prev => newLikedState ? prev + 1 : Math.max(0, prev - 1));

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post-interaction.php`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ action: 'like', blog_id: blogId })
            });
            const data = await response.json();
            if (data.status !== 'success') {
                // Revert on failure
                setIsLiked(!newLikedState);
                setLikes(prev => !newLikedState ? prev + 1 : Math.max(0, prev - 1));
                toast.error('Failed to update like');
            }
        } catch (error) {
            console.error('Like error:', error);
            setIsLiked(!newLikedState);
            setLikes(prev => !newLikedState ? prev + 1 : Math.max(0, prev - 1));
        }
    };

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: document.title,
                    text: 'Check out this laundry tip!',
                    url: window.location.href,
                });
                toast.success('Shared successfully!');
            } catch (error) {
                console.log('Error sharing:', error);
            }
        } else {
            // Fallback
            navigator.clipboard.writeText(window.location.href);
            toast.success('Link copied to clipboard!');
        }
    };

    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        if (!commentForm.name || !commentForm.email || !commentForm.content) {
            toast.error('Please fill in all fields');
            return;
        }

        setIsSubmitting(true);
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post-interaction.php`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    action: 'comment',
                    blog_id: blogId,
                    ...commentForm
                })
            });

            const data = await response.json();

            if (data.status === 'success') {
                toast.success('Comment posted successfully!');
                setCommentForm({ name: '', email: '', content: '' });
                // Refresh comments? ideally append locally but waiting for approval/reply logic is complex
                // For now, reload or specific logic: User comment shows up? 
                // Or just let them know it's posted.
                // Actually, listing updated comments requires re-fetch or manual append.
                // Let's manually append for immediate feedback if success.
                const newComment = {
                    id: Date.now(), // temp id
                    name: commentForm.name,
                    content: commentForm.content,
                    created_at: new Date().toISOString(),
                    replies: []
                };
                setComments(prev => [newComment, ...prev]);
                setCurrentPage(1);
            } else {
                if (data.code === 403) {
                    toast.error(data.message); // Cooldown message
                } else {
                    toast.error(data.message || 'Failed to post comment');
                }
            }
        } catch (error) {
            console.error('Comment error:', error);
            toast.error('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="max-w-3xl mx-auto mt-12 border-t border-slate-100 pt-8">
            {/* Interaction Bar */}
            <div className="flex items-center justify-between mb-12">
                <div className="flex items-center gap-6">
                    <button
                        onClick={handleLike}
                        className={`flex items-center gap-2 font-bold text-sm transition-all group ${isLiked ? 'text-red-500' : 'text-slate-400 hover:text-red-500'}`}
                    >
                        <Heart className={`w-6 h-6 ${isLiked ? 'fill-current scale-110' : 'group-hover:scale-110 transition-transform'}`} />
                        <span>{likes} {likes === 1 ? 'Like' : 'Likes'}</span>
                    </button>

                    <div className="flex items-center gap-2 font-bold text-sm text-primary">
                        <MessageCircle className="w-6 h-6" />
                        <span>{comments.length} {comments.length === 1 ? 'Comment' : 'Comments'}</span>
                    </div>
                </div>

                <button
                    onClick={handleShare}
                    className="flex items-center gap-2 text-slate-400 hover:text-header transition-colors font-bold text-sm group"
                >
                    <Share2 className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    <span>Share</span>
                </button>
            </div>

            {/* Add Comment Form - Always visible */}
            <div className="bg-slate-50 rounded-[2rem] p-8 mb-8">
                <h3 className="text-xl font-display font-bold text-header mb-6">Leave a Comment</h3>
                <form onSubmit={handleCommentSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            value={commentForm.name}
                            onChange={(e) => setCommentForm({ ...commentForm, name: e.target.value })}
                            className="w-full bg-white border-none rounded-xl px-5 py-3 text-sm font-bold text-slate-700 focus:ring-2 focus:ring-primary/10 transition-all"
                        />
                        <input
                            type="email"
                            placeholder="Your Email (kept private)"
                            value={commentForm.email}
                            onChange={(e) => setCommentForm({ ...commentForm, email: e.target.value })}
                            className="w-full bg-white border-none rounded-xl px-5 py-3 text-sm font-bold text-slate-700 focus:ring-2 focus:ring-primary/10 transition-all"
                        />
                    </div>
                    <textarea
                        placeholder="Share your thoughts..."
                        value={commentForm.content}
                        onChange={(e) => setCommentForm({ ...commentForm, content: e.target.value })}
                        className="w-full h-32 bg-white border-none rounded-xl px-5 py-4 text-sm font-medium text-slate-600 focus:ring-2 focus:ring-primary/10 transition-all resize-none"
                    />

                    <div className="flex items-center justify-between pt-2">
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest flex items-center gap-2">
                            <AlertCircle className="w-3 h-3" />
                            One comment at a time until replied
                        </p>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-primary text-white px-8 py-3 rounded-full font-bold text-sm hover:brightness-110 transition-all shadow-lg disabled:opacity-50 flex items-center gap-2"
                        >
                            {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                            Add Comment
                        </button>
                    </div>
                </form>
            </div>

            {/* Comments List - Always visible with pagination */}
            <div className="space-y-8 mb-20">
                {paginatedComments.map((comment) => (
                    <div key={comment.id} className="group">
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 font-bold text-sm shrink-0">
                                {comment.name.charAt(0)}
                            </div>
                            <div className="flex-1">
                                <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                                    <div className="flex items-center justify-between mb-2">
                                        <h4 className="font-bold text-header">{comment.name}</h4>
                                        <span className="text-xs font-bold text-slate-400">{new Date(comment.created_at).toLocaleDateString()}</span>
                                    </div>
                                    <p className="text-slate-600 text-sm leading-relaxed">{comment.content}</p>
                                </div>

                                {/* Nested Admin Replies */}
                                {comment.replies && comment.replies.length > 0 && (
                                    <div className="mt-4 ml-8 space-y-4 border-l-2 border-primary/10 pl-4">
                                        {comment.replies.map((reply) => (
                                            <div key={reply.id} className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <span className="px-2 py-1 bg-primary text-white rounded-md text-[10px] font-black uppercase tracking-widest">Admin</span>
                                                    <span className="text-xs font-bold text-slate-400">{new Date(reply.created_at).toLocaleDateString()}</span>
                                                </div>
                                                <p className="text-slate-700 text-sm font-medium leading-relaxed">{reply.content}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}

                {comments.length === 0 && (
                    <div className="text-center py-10">
                        <p className="text-slate-400 font-medium">Be the first to share your thoughts!</p>
                    </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex items-center justify-center gap-4 pt-8">
                        <button
                            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                            disabled={currentPage === 1}
                            className="flex items-center gap-1 px-4 py-2 rounded-xl font-bold text-sm bg-slate-100 text-slate-600 hover:bg-slate-200 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                            <ChevronLeft className="w-4 h-4" />
                            Previous
                        </button>
                        <span className="text-sm font-bold text-slate-600">
                            Page {currentPage} of {totalPages}
                        </span>
                        <button
                            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                            disabled={currentPage === totalPages}
                            className="flex items-center gap-1 px-4 py-2 rounded-xl font-bold text-sm bg-slate-100 text-slate-600 hover:bg-slate-200 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                            Next
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BlogInteractions;
