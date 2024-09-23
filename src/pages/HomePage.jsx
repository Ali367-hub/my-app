import PostList from "../components/PostList";

function HomePage(){
    return(<section class="mobile-block">
        <div class="mobile-block__header is-secondary">
           <h1>все новости </h1>
        </div>
        <PostList/>
    </section>);
}

export default HomePage;