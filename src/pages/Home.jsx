import Category from "../Components/Category";
import Hero from "../Components/Home/Hero";
import SellSection from "../Components/Home/SellSection";

function Home() {
    return ( 
        <>
            
            <Hero></Hero>
            
            <Category></Category>

              {/* Best Seller section:  */}
            <SellSection 
                title="Best Seller" 
                ids={["GEM001", "GEM002", "GEM004", "GEM006", "GEM010", "GEM012", "GEM015", "GEM020"]}
            />
            <SellSection 
                title="Promotion" 
                ids={["GEM003", "GEM005", "GEM007", "GEM009", "GEM011", "GEM013", "GEM017", "GEM018"]}
            />
        </>
     );
}

export default Home;