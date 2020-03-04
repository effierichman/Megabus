import React from 'react'

//non functioning Questions component based on UX designs. 
function FAQ (){
    return(
    <div className="faq-container">
        <h1 className="notification-email">Help & Frequently Asked Questions</h1>
        <h3 className="topic">Help Topics</h3>
        <button className="Button-help">Email us</button>
        <button className="Button-help">Reservations</button>
        <button className="Button-help">Travelling on the bus</button>

        <h3 className="topic">FAQ</h3>
        <button className="Button-help">What is Megabus RIDE?</button>
        <button className="Button-help">What can I bring with me?</button>
        <button className="Button-help">What if I lost an item on the bus?</button>
        <button className="Button-help">Can I bring food on the bus?</button>

    </div>
    )

}

export default FAQ