import FrontPage from "./FrontPage";
import BusinessKind from "./BusinessKind";
import Features from "./Features";

function HomePage() {
    return (
        <section className="">
            <FrontPage />
            <div className="w-full flex items-center flex-col  my-10">
                <h1 className="text-4xl font-semibold py-6">We are the bank for all business</h1>
                <div className="flex space-x-4 py-6">
                    <BusinessKind src="https://images.unsplash.com/photo-1594402919317-9e67dca0a305?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YnVzaW5lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60"
                    type="for small business" />
                        <BusinessKind src="https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60"
                    type="for startup's" />
                        <BusinessKind src="https://images.unsplash.com/photo-1587213811864-46e59f6873b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60"
                    type="business enterprise" />
                        <BusinessKind src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29tcGFueXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60"
                    type="mega corporation" />
                </div>
            </div>
            <Features />
        </section>
    )
}

export default HomePage;