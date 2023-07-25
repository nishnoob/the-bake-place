import { useState } from "react";

const Addons = () => {
    const [collapsed, setCollapsed] = useState(true);

    const handleToggleCollapse = () => {
        setCollapsed(state => !state);
    };

    return (
        <div className="addon-pane">
            <div className={`left ${collapsed && 'collapsed'}`}>
                <label className="addon-header">
                    <input
                        type="checkbox"
                        checked={!collapsed}
                        onChange={handleToggleCollapse}
                        className="collapse-toggle"
                    />
                    <h3>Send a Personalized Letter</h3>
                </label>
                {!collapsed && <div>Add a special touch to your order by sending a heartfelt message along with your delicious treats. We'll include a handwritten letter with your order to make the moment even more memorable.</div>}
            </div>
            {!collapsed && (
                <div className={`right ${collapsed && 'collapsed'}`}>
                    <div className="postcard">
                        <input placeholder="Dear..." />
                        <textarea placeholder="Message" />
                        <input placeholder="From..." />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Addons;