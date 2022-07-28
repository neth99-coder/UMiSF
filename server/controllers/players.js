const {Player} = require('../models/player');
const mongoose = require("mongoose");
const express = require('express');
const {User} = require("../models/user");

const getPlayers = async (req,res) => {
    const playerList = await Player.find();
    if(!playerList){
        res.status(500).json({success: false})
    }
    res.send(playerList);

}

const addPlayer = async (req,res) => {
    const player = new Player({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        year: req.body.year,
        b_day: req.body.b_day,
        nic: req.body.nic,
        mobile_number: req.body.mobile_number,
        telephone_number: req.body.telephone_number,
        email: req.body.email,
        school_club: req.body.school_club,
        gender: req.body.gender,
        postal_address: req.body.postal_address,
        payment_method: req.body.payment_method,
        isPaid: req.body.isPaid,
        payment_slip: req.body.payment_slip,
        match_types: req.body.match_types,
    })
}

const updatePlayer = async (req,res) => {

    if(!mongoose.isValidObjectId(req.params.id)){
        return res.status(400).send('Invalid player Id')
    }

    const player = await Player.findByIdAndUpdate(
        req.params.id,
        {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            year: req.body.year,
            b_day: req.body.b_day,
            nic: req.body.nic,
            mobile_number: req.body.mobile_number,
            telephone_number: req.body.telephone_number,
            email: req.body.email,
            school_club: req.body.school_club,
            gender: req.body.gender,
            postal_address: req.body.postal_address,
            payment_method: req.body.payment_method,
            isPaid: req.body.isPaid,
            payment_slip: req.body.payment_slip,
            match_types: req.body.match_types,
        },
        {new: true})
    if(!player){
        return res.status(404).send('the player cannot be update');
    }
    res.send(player);
}

const deletePlayer = async (req,res)=>{
    User.findByIdAndRemove(req.params.id).then(player => {
        if(player){
            return res.status(200).json({
                success: true,
                message: 'the player was deleted'
            })
        }else{
            return res.status(404).json({
                success: false, message: "player not found"
            })
        }
    }).catch(err=>{
        return res.status(400).json({
            success: false, error: err
        })
    })
}

module.exports = {
    getPlayers,
    addPlayer,
    updatePlayer,
    deletePlayer

}