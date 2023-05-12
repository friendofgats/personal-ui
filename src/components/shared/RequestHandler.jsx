import axios from 'axios';
import { useState, useEffect } from "react";

export default function RequestHandler(props = { section: "", verbosity: 0 }) {
    const [data, setData] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState("");
    const { section, verbosity } = props;
    const key = section + '_' + verbosity;

    useEffect(() => {
        const cachedData = JSON.parse(localStorage.getItem(key));
        if (cachedData) setData(cachedData);
        else {
            axios.get(process.env.API_BASE_URL, {
                params: {
                    section: section,
                    verbosity: verbosity
                }
            }
            ).then((response) => {
                localStorage.setItem(key, JSON.stringify(response.data))
                setData(response.data)
            })
                .catch(() => {
                    setError("Error retrieving data. Sorry you had to see this.")
                });
        }
        setLoaded(true);
    }, [section, verbosity, key]);
    return { data, error, loaded };
}