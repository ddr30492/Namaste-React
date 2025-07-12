import React from 'react';
const RestaurantMenuItem = ({ title, innerItem, isOpen, onToggle }) => {

    const sectionRef = React.useRef(null);
    //scroll to the section when it is opened
    React.useEffect(() => {
        if (isOpen && sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [isOpen]);

    return (
        <div className="restaurant-menu-item" ref={sectionRef}>
            <h3 className="bg-gray-400 p-3 rounded-md text-white font-bold text-lg justify-between flex" onClick={onToggle}>{title} <span>{isOpen ? '▲' : '▼'}</span></h3>
            {isOpen && (
                <div className="menu-items-list grid grid-cols-1 gap-4 p-4">
                    {innerItem.map((item) => (
                        <div key={item?.card?.info?.id} className="menu-item border-b last:border-0 pb-3">
                            <h4 className="font-bold text-lg">{item?.card?.info?.name}</h4>
                            <p><strong>Price: </strong>{item?.card?.info?.defaultPrice / 100 || item?.card?.info?.price / 100} ₹</p>
                            <p><strong>Description: </strong>{item?.card?.info?.description}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default RestaurantMenuItem;