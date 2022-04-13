import React from "react";
import Header from "../../components/header";
import TrackingOrderDetail from "../../components/progress/TrackOrderDetail";

const TrackingOrder = () => {
    return (
        <div id="main">
            <Header/>
            <TrackingOrderDetail/>
        </div>
    );
}

export default TrackingOrder;
