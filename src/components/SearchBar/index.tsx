import { memo, useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { Input } from 'antd';
const { Search } = Input;

import { SizeType } from 'antd/lib/config-provider/SizeContext';

const texts = Object.freeze({
    a: 'Search for repositories',
});

const SearchBarComponent = ({ size }: { size: SizeType }) => {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = useCallback(() => {
        setSearchQuery('');
        router.push(`/search?repository-name=${searchQuery}`);
    }, [searchQuery]);

    const handleChange = useCallback(event => {
        setSearchQuery(event.target.value);
    }, []);

    return (
        <Search
            placeholder={texts.a}
            enterButton
            size={size}
            loading={false}
            onChange={handleChange}
            onSearch={handleSearch}
            value={searchQuery}
        />
    );
};

export const SearchBar = memo(SearchBarComponent);
