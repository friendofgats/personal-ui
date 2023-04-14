import axios from 'axios';
import { useState, useEffect } from "react";

const BASE_URL = "http://localhost:8000/info"

export default function RequestHandler(props = { section: "", verbosity: 0 }) {
    const [data, setData] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState("");

    const { section, verbosity } = props;
    const key = section + '_' + verbosity;

    useEffect(() => {
        // localStorage will not work in private browser sessions
        setData(JSON.parse(localStorage.getItem(key)));
        if (Object.keys(data).length === 0) {
            axios.get(BASE_URL, {
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
    }, []);
    return { data, error, loaded };
}
