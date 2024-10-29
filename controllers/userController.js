const User = require('../models/User');

const getProfile = async (req, res) => {
    try {
        res.json({
            success: true,
            data: {
                id: req.user._id,
                fullName: req.user.fullName,
                username: req.user.username
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};

const updateProfile = async (req, res) => {
    try {
        const { fullName } = req.body;

        req.user.fullName = fullName;
        await req.user.save();

        res.json({
            success: true,
            message: 'User information updated successfully',
            data: {
                id: req.user._id,
                fullName: req.user.fullName,
                username: req.user.username
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};

module.exports = {
    getProfile,
    updateProfile
};