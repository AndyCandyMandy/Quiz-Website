function LandingPage() { 
    return (
        <div> 
            <section className="landingBody">
                <div className="landingInfoBox">
                    <h1>Welcome to the Quiz Website</h1> 
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui in risus imperdiet molestie. Aenean ex dui, viverra nec urna mollis, interdum fermentum justo. Aenean in sapien condimentum, finibus orci at, auctor lacus. Fusce vel mauris urna. Nullam rhoncus ac mauris eget pulvinar. Curabitur rutrum orci ac erat cursus efficitur. Maecenas ac dolor non tellus pharetra volutpat a at nisl. Proin iaculis, felis ac efficitur venenatis, felis velit tristique nisl, sed commodo nibh purus nec metus. Aliquam nec aliquam dui, eget bibendum dolor. Vestibulum lacinia justo blandit tincidunt suscipit. Phasellus at lectus justo.
                    </p>
                </div> 

                <div className="landingAccountBox"> 
                    <button className="landingBtn">Login</button> 
                    <button className="landingBtn">Sign Up</button>
                </div>
            </section>
            
            <footer className="landingFooter">
                <p>Testing</p>
            </footer>
        </div> 
        
    );
} 

export default LandingPage;