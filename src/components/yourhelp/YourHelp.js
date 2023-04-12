import React from 'react'

function YourHelp() {
  return (
    <>
    <div class="section-your-help">
        <form action="">
            <div class="wrap">
                <div class="your-help">
                    <h2>Need our help?</h2>
                    <p>Contact us freely to get any information you need</p>
                </div>
                <div class="content1">
                    <div class="content-left">
                        <div><label for="username">First name</label></div>
                        <div> <input type="text"/></div>
                    </div>
                    <div class="content-right">
                        <div><label for="Company-name">Last name</label></div>
                        <div> <input type="text"/></div>
                    </div>
                </div>
                <div class="content-bottom">
                    <div><label for="Company-address">Email</label></div>
                    <div> <input type="text"/></div>
                    <div><label for="PIC number">Phone number</label></div>
                    <div> <input type="text"/></div>
                    <div><label for="Request service">Message</label></div>
                    <div> <input type="text"/></div>
                </div>
            </div>
        </form>
    </div>
    </>
  )
}

export default YourHelp
