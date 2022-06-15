import React from "react";

/**
 * Create and export a component called Loading which uses this static HTML template:
 *
 * <div id="loading">
 *   <h2 className="message">Searching...</h2>
 * </div>
 */
const Loading = () => {
    return (
        <div id = "Loading">
            <h2 className="message">Loading...</h2>
        </div>
    );
}

export default Loading;
