class NewsController {
    //Định nghĩa phương thức
    //GET /news
    index(req, res) {
        res.render('news');
    }

    //Get /news/:slug
    show(req, res) {
        res.send('Detail');
    }
}

module.exports = new NewsController;