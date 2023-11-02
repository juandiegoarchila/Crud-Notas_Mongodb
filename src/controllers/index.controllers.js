const indexCtrol = {};

indexCtrol.renderIndex = (req, res) => {
    res.render('index')
};

indexCtrol.renderAbout = (req, res) => {
    res.render('about')
};

module.exports = indexCtrol;