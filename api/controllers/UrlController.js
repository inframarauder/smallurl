const Url = require('../models/url.model');

exports.quickCreate = async (req, res) => {
  try {
    let url = await new Url(req.body).save();
    return res.status(201).json({ shortUrl: url.shortUrl });
  } catch (error) {
    console.error('Error in quick create', error);
    return res.status(500).json({ error: 'Internal server error!' });
  }
};

exports.createShortUrl = async (req, res) => {
  try {
    let url = await Url.findOne({ longUrl: req.body.longUrl, user: req.user });
    if (url) {
      return res.status(400).json({
        error: 'You have already have a shortened version of this url!',
      });
    } else {
      url = await new Url({ ...req.body, user: req.user }).save();
      return res.status(201).json(url);
    }
  } catch (error) {
    console.error('Error in short url creation', error);
    return res.status(500).json({ error: 'Internal server error!' });
  }
};

exports.redirectToUrl = async (req, res) => {
  try {
    let url = await Url.findOneAndUpdate(
      { shortUrl: req.params.shortUrl },
      { $inc: { clicks: 1 } },
      { new: true, runValidators: true }
    );

    if (!url) {
      return res.status(404).json({ error: 'URL not registered!' });
    } else {
      return res.status(200).json({ longUrl: url.longUrl });
    }
  } catch (error) {
    console.error('Error in redirection', error);
    return res.status(500).json({ error: 'Internal server error!' });
  }
};

exports.getDashboard = async (req, res) => {
  try {
    let urls = await Url.find({ user: req.user }).sort({ _id: -1 });
    return res.status(200).json(urls);
  } catch (error) {
    console.error('Error in retrieving dashboard', error);
    return res.status(500).json({ error: 'Internal server error!' });
  }
};

exports.getUrl = async (req, res) => {
  try {
    let url = await Url.findOne({ longUrl: req.query.longUrl, user: req.user });
    if (!url) {
      return res.status(404).json({ error: 'Url not found!' });
    } else {
      return res.status(200).json(url);
    }
  } catch (error) {
    console.error('Error in retrieving url', error);
    return res.status(500).json({ error: 'Internal server error!' });
  }
};

exports.deleteUrl = async (req, res) => {
  try {
    await Url.findByIdAndDelete(req.params.urlId);
    return res.status(204).send('Deleted');
  } catch (error) {
    console.error('Error in redirection', error);
    return res.status(500).json({ error: 'Internal server error!' });
  }
};
