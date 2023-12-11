/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import axios from "axios";
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom";
import he from "he"

function Home({ searchTerm }) {
    const [AllData, setAllData] = useState([]);
    const [copyData, setCopyData] = useState([]);


    function fetchData() {
        axios.get("https://www.reddit.com/r/reactjs.json").then((res) => {
            setAllData(res.data.data.children);
            setCopyData(res.data.data.children);
        }).catch((error) => {
            console.log(error)
        })
    }
    function decodeFunc(htmlContent) {
        return he.decode(htmlContent);

    }

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        searchingFunc();

    }, [searchTerm]);



    function searchingFunc() {
        const filteredData = copyData.filter((obj) => {
            return obj.data.title.toLowerCase().includes(searchTerm.toLowerCase());
        });
        setAllData(filteredData);
    }



    console.log(AllData)
    console.log(copyData);
    return (
        <div className="home">
            <h1 className="discussion">Reddit's Posts</h1>
            {

                AllData.map((obj) => {

                    return <div className="post">
                        <h2 className="heading">{obj.data.title}</h2>
                        <div className="score">Content Rating:{obj.data.score}</div>

                        < div dangerouslySetInnerHTML={{ __html: decodeFunc(obj?.data?.selftext_html ?? "&lt;p&gt;Content not exist ,!&lt;/p&gt;") }} />
                        <div>
                            <NavLink to={obj.data.url}>Read more....</NavLink>
                        </div>
                    </div>
                })
            }
            {
                AllData.length == 0 && <h1 className="discussion">
                    Loading....
                </h1>
            }
        </div >
    )
}

export default Home
