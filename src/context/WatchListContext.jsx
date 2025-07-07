import { useState, useEffect, createContext } from "react";

export const WatchListContext = createContext();

export const WatchListProvider = ({ children }) => {
    const [watchlist, setWatchlist] = useState([]);
    const [genrelist, setGenrelist] = useState([])

    useEffect(() => {

        let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=7b5fd64bdc505f192a0caf6664fa4f8f`

        fetch(url)
            .then((response) => response.json())
            .then((data) => setGenrelist(data.genres || []))
    }, [])

    const toggleWatchlist = (movie) => {
        const index = watchlist.findIndex((m) => m.id === movie.id);
        if (index === -1) {
            setWatchlist([...watchlist, movie]);
        } else {
            setWatchlist([...watchlist.slice(0, index), ...watchlist.slice(index + 1)])
        }
    }

    return (
        <WatchListContext.Provider value={{ watchlist, toggleWatchlist, genrelist }}>
            {children}
        </WatchListContext.Provider>
    )
}