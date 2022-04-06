import React, {useState} from "react";
import IconSwitch from "./IconSwitch";
import CardView from "./CardView";
import ListView from "./ListView";

const Store = ({products}) => {
    const [layout, setLayout] = useState('view_module');
    const switchLayout = () => {
        if (layout === 'view_module') {
            setLayout('view_list');
        } else {
            setLayout('view_module');
        }
    };

    return (
        <div className="products">
            <div className="icon-switch-container">
                <IconSwitch
                    icon={layout === 'view_module' ? 'view_list' : 'view_module'}
                    onSwitch={switchLayout}
                />
            </div>
            {layout === 'view_module' ? ( <CardView cards={products}/> ) : ( <ListView cards={products}/> )}
        </div>
    );
}

export default Store;