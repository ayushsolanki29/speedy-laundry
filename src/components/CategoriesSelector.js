'use client';

import { useState, useEffect, useRef } from 'react';
import { Tag, Check, Plus, Loader2 } from 'lucide-react';

export default function CategoriesSelector({ selectedCategory, onSelect }) {
    const [categories, setCategories] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState(selectedCategory || '');
    const [isLoading, setIsLoading] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const fetchCategories = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories.php`);
                const data = await response.json();
                if (data.status === 'success') {
                    setCategories(data.data);
                }
            } catch (error) {
                console.error('Failed to fetch categories:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchCategories();
    }, []);

    useEffect(() => {
        setInputValue(selectedCategory || '');
    }, [selectedCategory]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const filteredCategories = categories.filter(cat =>
        cat.toLowerCase().includes(inputValue.toLowerCase())
    );

    const handleSelect = (category) => {
        setInputValue(category);
        onSelect(category);
        setIsOpen(false);
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        onSelect(value); // Allow creating new category by typing
        setIsOpen(true);
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <div className="relative">
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    onFocus={() => setIsOpen(true)}
                    placeholder="Select or create category..."
                    className="w-full bg-slate-50 border-none rounded-2xl px-5 py-3.5 pl-10 text-xs font-bold text-slate-700 focus:ring-2 focus:ring-primary/10 transition-all"
                />
                <Tag className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                {isLoading && (
                    <Loader2 className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-primary animate-spin" />
                )}
            </div>

            {isOpen && (
                <div className="absolute z-50 w-full mt-2 bg-white rounded-2xl border border-slate-100 shadow-xl max-h-60 overflow-y-auto custom-scrollbar">
                    {filteredCategories.length > 0 ? (
                        <div className="p-2 space-y-1">
                            {filteredCategories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => handleSelect(category)}
                                    className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-between
                                        ${inputValue === category ? 'bg-primary/10 text-primary' : 'text-slate-600 hover:bg-slate-50'}
                                    `}
                                >
                                    <span>{category}</span>
                                    {inputValue === category && <Check className="w-3.5 h-3.5" />}
                                </button>
                            ))}
                        </div>
                    ) : (
                        inputValue && (
                            <div className="p-2">
                                <button
                                    onClick={() => handleSelect(inputValue)}
                                    className="w-full text-left px-4 py-2.5 rounded-xl text-xs font-bold text-primary hover:bg-primary/5 transition-all flex items-center gap-2"
                                >
                                    <Plus className="w-3.5 h-3.5" />
                                    <span>Create "{inputValue}"</span>
                                </button>
                            </div>
                        )
                    )}
                    {categories.length === 0 && !inputValue && (
                        <div className="p-4 text-center text-xs text-slate-400 font-medium">
                            No categories found. Start typing to create one.
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
