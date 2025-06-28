import React, { useContext, useState ,useEffect} from 'react';
import './Displaymenu.css';
import { Appcontext } from '../contextx/Appcontext';
import { assets } from '../assets/frontend_assets/assets';
import axios from "axios"

const Displaymenu = ({ category }) => {
    //const { food_list } = useContext(Appcontext);
    const [food_list,setfood_list]=useState([])

    const { itemlist, setitemlist } = useContext(Appcontext);
;
    const getfoods=async()=>{
        const response= await axios.get("http://localhost:4000/api/food/foodlist/")
        setfood_list(response.data.list)
    }
    useEffect(() => {
        getfoods();
    }, []); // Empty dependency array = run once when component mounts

    const getelement = (id) => {
        return itemlist[id] || { image:"" ,name:"",price:0,count: 0, clicked: false };
    };
    console.log(itemlist)
    return (
        <div className='whole-display-page'>
            <div className='h4tag'>
                <h4>Top Dishes Near You</h4>
                <br />
            </div>
            <div className='display-menu-items'>
                {food_list.map((elements) =>
                    category === elements.category || category === 'All' ? (
                        <div className='each-item-name' key={elements._id}>
                            <img className='image_dish' src={`http://localhost:4000/uploads/
${elements.image}`} alt={elements.name} />

                            <button
                                className={
                                    getelement(elements._id).clicked &&
                                    getelement(elements._id).count > 0
                                        ? 'removeicon'
                                        : 'addicon'
                                }
                                onClick={() => {
                                    const name=elements.name
                                    const price=elements.price
                                    const img=elements.image
                                    setitemlist((prev) => ({
                                        ...prev,
                                        [elements._id]: {image:img, count: 1, clicked: true,price:price ,name:name },
                                    }));
                                }}
                            >
                                <img src={assets.add_icon_white} alt='Add' />
                            </button>

                            {getelement(elements._id).clicked &&
                            getelement(elements._id).count !== 0 ? (
                                <div className='addsubbutton'>
                                    <button
                                        className='addgreenicon'
                                        onClick={() => {
                                            const current = getelement(elements._id).count;
                                            setitemlist((prev) => ({
                                                ...prev,
                                                [elements._id]: {
                                                    ...getelement(elements._id),
                                                    count: current + 1,
                                                },
                                            }));
                                        }}
                                    >
                                        <img src={assets.add_icon_green} alt='+' />
                                    </button>

                                    <p>{getelement(elements._id).count}</p>

                                    <button
                                        className='addgreenicon'
                                        onClick={() => {
                                            const current = getelement(elements._id).count;
                                            const newCount = current - 1;
                                            setitemlist((prev) => ({
                                                ...prev,
                                                [elements._id]: {
                                                    ...getelement(elements._id),
                                                    count: newCount,
                                                    clicked: newCount > 0,
                                                },
                                            }));
                                        }}
                                    >
                                        <img src={assets.remove_icon_red} alt='-' />
                                    </button>
                                </div>
                            ) : null}

                            <div className='flexstars'>
                                <p className='name'>{elements.name}</p>
                                <img src={assets.rating_starts} alt='Rating' />
                            </div>
                            <p className='descrip'>{elements.description}</p>
                            <p className='price'>${elements.price}</p>
                        </div>
                    ) : null
                )}
            </div>
        </div>
    );
};

export default Displaymenu;
