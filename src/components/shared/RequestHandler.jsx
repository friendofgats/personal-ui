import axios from 'axios';
import { useState, useEffect } from "react";

const BASE_URL = "http://localhost:8000/info"

export default function RequestHandler(props = { section: "", verbosity: 0 }) {
    const [data, setData] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(null);

    const { section, verbosity } = props;

    useEffect(() => {
        axios.get(BASE_URL, {
            params: {
                section: section,
                verbosity: verbosity
            }
        }
        ).then((response) => {
            setLoaded(true);
            setData(response.data)
        })
            .catch(() => {
                setError("Error retrieving data. Sorry you had to see this.")
            });
    }, []);
    return { data, error, loaded };
}
