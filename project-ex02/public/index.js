const App = function(){
    const app = document.createElement('h1');
    app.textContent = "hello world";

    return app;
}

document.getElementById('root').appendChild(App());