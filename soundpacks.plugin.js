/**
 * @name SoundPack
 * @version 1.0.0
 * @description Enables discord april fools soundpack feature and allows for custom sound packs
 * @author BOYStijn
 * 
 * 
 */

class SoundPack {
    getName() {
        return "SoundPack"
    }

    getDescription() {
        return "Enables discord april fools soundpack feature and allows for custom sound packs"
    }

    getAuthor() {
        return "BOYStijn"
    }

    start() {
        document.querySelectorAll('.side-8zPYf6').forEach(node => {
            console.log(node)
          });
        // Extracted from Samogot's LibDiscordInternals for BetterDiscord.
        const req = typeof(webpackJsonp) === "function" ? webpackJsonp([], {
            '__extra_id__': (module, exports, req) => exports.default = req
        }, ['__extra_id__']).default : webpackJsonp.push([[], {
            '__extra_id__': (module, exports, req) => module.exports = req
        }, [['__extra_id__']]]);
        delete req.m['__extra_id__'];
        delete req.c['__extra_id__'];
    
        var r = req(5065).WebAudioSound

        function helper(e, t) {
            return void 0 === t && (t = 1),
            new r(e,t)
        }
        
        var a = req(725);
        var i = a.Soundpacks
        var o = req(7)
        let labelarray = [{
            value: i.CLASSIC,
            label: o.default.Messages.SOUNDPACK_CLASSIC_LABEL
        }, {
            value: i.CHAOS,
            label: o.default.Messages.SOUNDPACK_CHAOS_LABEL
        }, {
            value: i.YACHTY,
            label: o.default.Messages.SOUNDPACK_YACHTY_LABEL
        }, {
            value: i.UNCLE,
            label: o.default.Messages.SOUNDPACK_UNCLE_LABEL
        }]

        let soundmap = {}

        req(1211).default.getCurrentConfig({}).allowSoundpacks = !0

        soundmap[a.Soundpacks.CLASSIC] = {
            discodo: null,
            message1: null,
            deafen: null,
            undeafen: null,
            mute: null,
            unmute: null,
            disconnect: null,
            ptt_start: null,
            ptt_stop: null,
            user_join: null,
            user_leave: null,
            user_moved: null,
            call_calling: null,
            call_ringing: null,
            stream_started: null,
            stream_ended: null,
            stream_user_joined: null,
            stream_user_left: null
        }

        soundmap[a.Soundpacks.CHAOS] = {
            discodo: "chaos_bootup",
            message1: "chaos_message",
            deafen: "chaos_deafen",
            undeafen: "chaos_undeafen",
            mute: "chaos_mute",
            unmute: "chaos_unmute",
            disconnect: "chaos_disconnect",
            ptt_start: "chaos_ptt_start",
            ptt_stop: "chaos_ptt_stop",
            user_join: "chaos_user_join",
            user_leave: "chaos_user_leave",
            user_moved: "user_moved",
            call_calling: "chaos_call_calling",
            call_ringing: "chaos_call_ringing",
            stream_started: "chaos_stream_started",
            stream_ended: "chaos_stream_ended",
            stream_user_joined: "chaos_stream_user_joined",
            stream_user_left: "chaos_stream_user_left"
        }
        soundmap[a.Soundpacks.YACHTY] = {
            discodo: "yachty_bootup",
            message1: "yachty_message",
            deafen: "yachty_deafen",
            undeafen: "yachty_undeafen",
            mute: "yachty_mute",
            unmute: "yachty_unmute",
            disconnect: "yachty_disconnect",
            ptt_start: "yachty_ptt_start",
            ptt_stop: "yachty_ptt_stop",
            user_join: "yachty_user_join",
            user_leave: "yachty_user_leave",
            user_moved: "user_moved",
            call_calling: "yachty_call_calling",
            call_ringing: "yachty_call_ringing",
            stream_started: "yachty_stream_started",
            stream_ended: "yachty_stream_ended",
            stream_user_joined: "yachty_stream_user_joined",
            stream_user_left: "yachty_stream_user_left"
        },
        soundmap[a.Soundpacks.UNCLE] = {
            discodo: "uncle_bootup",
            message1: "uncle_message",
            deafen: "uncle_deafen",
            undeafen: "uncle_undeafen",
            mute: "uncle_mute",
            unmute: "uncle_unmute",
            disconnect: "uncle_disconnect",
            ptt_start: "uncle_ptt_start",
            ptt_stop: "uncle_ptt_stop",
            user_join: "uncle_user_join",
            user_leave: "uncle_user_leave",
            user_moved: "uncle_user_moved",
            call_calling: "uncle_call_calling",
            call_ringing: "uncle_call_ringing",
            stream_started: "uncle_stream_started",
            stream_ended: "uncle_stream_ended",
            stream_user_joined: "uncle_stream_user_joined",
            stream_user_left: "uncle_stream_user_left"
        }

        let soundloclist = {
            "./call_calling.mp3": req.p + "c6e92752668dde4eee5923d70441579f.mp3",
            "./call_ringing.mp3": req.p + "84a1b4e11d634dbfa1e5dd97a96de3ad.mp3",
            "./call_ringing_beat.mp3": req.p + "b9411af07f154a6fef543e7e442e4da9.mp3",
            "./chaos_bootup.mp3": req.p + "b9411af07f154a6fef543e7e442e4da9.mp3",
            "./chaos_call_calling.mp3": req.p + "9f67ccdbb9e9d03fc120192744fe1a5a.mp3",
            "./chaos_call_ringing.mp3": req.p + "607ac5dd6c8fae76711a79dd9e2a0aaf.mp3",
            "./chaos_deafen.mp3": req.p + "5470f6bd4ae9d9ecd57845f7aaf27e74.mp3",
            "./chaos_disconnect.mp3": req.p + "ec97b71622119819256689ddcbc694c5.mp3",
            "./chaos_message.mp3": req.p + "5c42f90d147b16b2e32f2100fe533162.mp3",
            "./chaos_mute.mp3": req.p + "81fff96fd7809efbf2c5fe1329236629.mp3",
            "./chaos_ptt_start.mp3": req.p + "e58b29b25a85fa9a438307f1d767aa37.mp3",
            "./chaos_ptt_stop.mp3": req.p + "b8ec6d8279916423bcb9aef98c339f9b.mp3",
            "./chaos_stream_ended.mp3": req.p + "e134b8a555f3ce0c335bb263c17574b0.mp3",
            "./chaos_stream_started.mp3": req.p + "7cab8b4a9c561ca3acfec9fe0ae6b3c7.mp3",
            "./chaos_stream_user_joined.mp3": req.p + "f35faf578fb5fc6394313f8eeb373a3e.mp3",
            "./chaos_stream_user_left.mp3": req.p + "3871ba4ca02f1d0163d7475a16dab30a.mp3",
            "./chaos_undeafen.mp3": req.p + "daf509b2834fff4f8d9021d08f810e71.mp3",
            "./chaos_unmute.mp3": req.p + "9bd62881ba46df7ee76b02c6b2d30c6c.mp3",
            "./chaos_user_join.mp3": req.p + "eaf6fab4e40f1a293bdd3884275bcd85.mp3",
            "./chaos_user_leave.mp3": req.p + "6d72d30734c5537d74971e6b81a51999.mp3",
            "./ddr-down.mp3": req.p + "71f048f8aa7d4b24bf4268a87cbbb192.mp3",
            "./ddr-left.mp3": req.p + "1de04408e62b5d52ae3ebbb91e9e1978.mp3",
            "./ddr-right.mp3": req.p + "2c0433f93db8449e4a82b76dc520cb29.mp3",
            "./ddr-up.mp3": req.p + "68472713f7a62c7c37e0a6a5d5a1faeb.mp3",
            "./deafen.mp3": req.p + "e4d539271704b87764dc465b1a061abd.mp3",
            "./discodo.mp3": req.p + "ae7d16bb2eea76b9b9977db0fad66658.mp3",
            "./disconnect.mp3": req.p + "7e125dc075ec6e5ae796e4c3ab83abb3.mp3",
            "./human_man.mp3": req.p + "a37dcd6272ae41cf49295d58c9806fe3.mp3",
            "./mention1.mp3": req.p + "fa4d62c3cbc80733bf1f01b9c6f181de.mp3",
            "./mention2.mp3": req.p + "a5f42064e8120e381528b14fd3188b72.mp3",
            "./mention3.mp3": req.p + "84c9fa3d07da865278bd77c97d952db4.mp3",
            "./message1.mp3": req.p + "dd920c06a01e5bb8b09678581e29d56f.mp3",
            "./message2.mp3": req.p + "15fe810f6cfab609c7fcda61652b9b34.mp3",
            "./message3.mp3": req.p + "53ce6a92d3c233e8b4ac529d34d374e4.mp3",
            "./mute.mp3": req.p + "429d09ee3b86e81a75b5e06d3fb482be.mp3",
            "./overlayunlock.mp3": req.p + "ad322ffe0a88436296158a80d5d11baa.mp3",
            "./ptt_start.mp3": req.p + "8b63833c8d252fedba6b9c4f2517c705.mp3",
            "./ptt_stop.mp3": req.p + "74ab980d6890a0fa6aa0336182f9f620.mp3",
            "./reconnect.mp3": req.p + "471cfd0005b112ff857705e894bf41a6.mp3",
            "./robot_man.mp3": req.p + "66598bea6e59eb8acdf32cf2d9d75ba9.mp3",
            "./stream_ended.mp3": req.p + "4e30f98aa537854f79f49a76af822bbc.mp3",
            "./stream_started.mp3": req.p + "9ca817f41727edc1b2f1bc4f1911107c.mp3",
            "./stream_user_joined.mp3": req.p + "5827bbf9a67c61cbb0e02ffbf434b654.mp3",
            "./stream_user_left.mp3": req.p + "7cdcdcbc426cc43583365a671c24b740.mp3",
            "./uncle_bootup.mp3": req.p + "403401035c40ef53398b0787be3dfda3.mp3",
            "./uncle_call_calling.mp3": req.p + "9d648a896b6fada665a5ce67a6b0fa67.mp3",
            "./uncle_call_ringing.mp3": req.p + "2c5a169dd4ed761067bb1dd5d6fd06eb.mp3",
            "./uncle_deafen.mp3": req.p + "0ec09e52a757a8fba5090fbffb3907d9.mp3",
            "./uncle_disconnect.mp3": req.p + "c532a859eff730ecd208ef2b1be62958.mp3",
            "./uncle_message.mp3": req.p + "c8e5f657aec39596a45debabd86e2f57.mp3",
            "./uncle_mute.mp3": req.p + "bb1eb7d4ad979b143cf2565bece1d86c.mp3",
            "./uncle_ptt_start.mp3": req.p + "3a23273aca92b6ea3eaadad70288b14e.mp3",
            "./uncle_ptt_stop.mp3": req.p + "f0c927e271ffa91e1d4b6fd85cc9fa2f.mp3",
            "./uncle_stream_ended.mp3": req.p + "86dc600cfa5a4f5f56a192aed65d8ef3.mp3",
            "./uncle_stream_started.mp3": req.p + "148257da85b4767dc2a9af3595fad205.mp3",
            "./uncle_stream_user_joined.mp3": req.p + "db753e52c70b732754f00cdb81d46232.mp3",
            "./uncle_stream_user_left.mp3": req.p + "e2aaee99449f29a0630a1d90f205ed22.mp3",
            "./uncle_undeafen.mp3": req.p + "7a0187b3c9816e3d2ee2f16ee77a7614.mp3",
            "./uncle_unmute.mp3": req.p + "caf5f773a55b81fd82255b1df5114496.mp3",
            "./uncle_user_join.mp3": req.p + "850fd1f05917333ed2a89dd97bc5b363.mp3",
            "./uncle_user_leave.mp3": req.p + "2e6ebe2d593a3249d097ebc8ad349cd4.mp3",
            "./uncle_user_moved.mp3": req.p + "0802ac18a888aae76f28a32f80355d24.mp3",
            "./uncle_welcome_message.mp3": req.p + "f97c37a2bf7ede39fe9c4dd5622744a5.mp3",
            "./undeafen.mp3": req.p + "5a000a0d4dff083d12a1d4fc2c7cbf66.mp3",
            "./unmute.mp3": req.p + "43805b9dd757ac4f6b9b58c1a8ee5f0d.mp3",
            "./user_join.mp3": req.p + "5dd43c946894005258d85770f0d10cff.mp3",
            "./user_leave.mp3": req.p + "4fcfeb2cba26459c4750e60f626cebdc.mp3",
            "./user_moved.mp3": req.p + "e81d11590762728c1b811eadfa5be766.mp3",
            "./yachty_bootup.mp3": req.p + "c88ae254f418b800f2b5c5f1525dc0ed.mp3",
            "./yachty_call_calling.mp3": req.p + "c83bde4d12570c4cf27576dc055eafbb.mp3",
            "./yachty_call_ringing.mp3": req.p + "0c4f59a03b74a68f6b2b48e12f63d025.mp3",
            "./yachty_deafen.mp3": req.p + "9aca5150a677a9f2fb22688d6ea6018f.mp3",
            "./yachty_disconnect.mp3": req.p + "f4202759ad87af36d9b300c365d3837e.mp3",
            "./yachty_message.mp3": req.p + "fb2c4360bf577e96fc86afa06063c489.mp3",
            "./yachty_mute.mp3": req.p + "9bf29386d09c819c4c026067a46f3852.mp3",
            "./yachty_mute_2.mp3": req.p + "52e1f9a301927d8f0ad6c240958a5462.mp3",
            "./yachty_ptt_start.mp3": req.p + "643a05f228c3ba9f861d464d2d652065.mp3",
            "./yachty_ptt_stop.mp3": req.p + "06bf919aa2f2e33104ba1ceaf70c5e87.mp3",
            "./yachty_stream_ended.mp3": req.p + "9527396ff31361428b4aba49d52956ae.mp3",
            "./yachty_stream_started.mp3": req.p + "965c2a4b2d9052c70a0b175ee2103cf9.mp3",
            "./yachty_stream_user_joined.mp3": req.p + "4436dccdccc1b43f325e99c0edacc694.mp3",
            "./yachty_stream_user_left.mp3": req.p + "90e68e1ba36355ee2c42cea26e6187f6.mp3",
            "./yachty_undeafen.mp3": req.p + "db53837f464baab67853752d27d9fa1e.mp3",
            "./yachty_unmute.mp3": req.p + "d70fd809b6e955a2c34c07022422085c.mp3",
            "./yachty_user_join.mp3": req.p + "765e5bf96068ffd4b86dd1c88ae6a1c1.mp3",
            "./yachty_user_leave.mp3": req.p + "a01e6f09a7d4566fd30c30a136042631.mp3"
        }

        for (let pack of this.readSoundpacks()) {
            a.Soundpacks[pack.classname] = pack.label;
            req(7).default.Messages["SOUNDPACK_" + pack.classname + "_LABEL"] = pack.label;
            labelarray.push({
                value: i[pack.classname],
                label: o.default.Messages["SOUNDPACK_" + pack.classname + "_LABEL"]
            })
            
            let sounds = {};
            for (let key of Object.keys(pack.sounddata)) {
                if (pack.sounddata[key] != null) {
                    sounds[key] = pack.classname + "_" + key;
                    soundloclist["./" + pack.classname + "_" + key + ".mp3"] = pack.sounddata[key];
                } else {
                    sounds[key] = null
                }
            }
            soundmap[a.Soundpacks[pack.classname]] = sounds;
        }

        console.log(soundmap)
        console.log(soundloclist)

        req(725).getSoundpackOptions = function() {
            return labelarray;
        }
        req(5064).default = function(e) {
            var r = (r = req(140)) && r.__esModule ? r : {
                default: r
            }
            var s = soundmap
            return s[e]
        }
        req(1064).playSound = function(e, t) {
            var r, i = req(1116), o = req(5064), a = req(151);
            var n;
            void 0 === t && (t = 1);
            if (a.default.disableSounds)
                return;
            var r = (0,
            o.default)(i.default.getSoundpack());
            var tmp = helper(null !== (n = r[e]) && void 0 !== n ? n : e, t)
            tmp._ensureAudio = function() {
                var e = tmp;
                var o = req(13)
                var i = req(41)
                
                return e._audio = e._audio || new Promise((function(t, r) {
                    console.log("./" + e.name + ".mp3")
                    var des = soundloclist["./" + e.name + ".mp3"]
                    console.log(des);
                    var a = new Audio;
                    a.src = des,
                    a.onloadeddata = function() {
                        a.volume = Math.min(i.default.getOutputVolume() / 100 * e._volume, 1),
                        o.default.embedded && a.setSinkId("default"),
                        t(a)
                    }
                    ,
                    a.onerror = function() {
                        return r(new Error("could not play audio"))
                    }
                    ,
                    a.onended = function() {
                        return e._destroyAudio()
                    }
                    ,
                    a.load()
                }
                )),
                this._audio
            }
        console.log(tmp)
        tmp.play()
        }
    }

    readSoundpacks() {
        let data = BdApi.loadData("SoundPack", "packs");
        if (data == null) data = this.getDefaultData();
        return data;
    }

    getDefaultData() {
        const data = [
            {
                classname: "TEAMSPEAK",
                label: "TeamSpeak",
                sounddata: {
                    discodo: null,
                    message1: null,
                    deafen: "https://cdn.discordapp.com/attachments/747533263341486212/839507475220660304/sound-muted.mp3",
                    undeafen: "https://cdn.discordapp.com/attachments/747533263341486212/839507472595025951/sound-resumed.mp3",
                    mute: "https://cdn.discordapp.com/attachments/747533263341486212/839507482506166272/microphone-muted.mp3",
                    unmute: "https://cdn.discordapp.com/attachments/747533263341486212/839507479951835186/microphone-activated.mp3",
                    disconnect: "https://cdn.discordapp.com/attachments/747533263341486212/839453090578432030/User_left_your_channel.mp3",
                    ptt_start: null,
                    ptt_stop: null,
                    user_join: "https://cdn.discordapp.com/attachments/747533263341486212/839447031898570752/User_joined_your_channel_sound_xd.mp3",
                    user_leave: "https://cdn.discordapp.com/attachments/747533263341486212/839453090578432030/User_left_your_channel.mp3",
                    user_moved: "https://cdn.discordapp.com/attachments/747533263341486212/839453090578432030/User_left_your_channel.mp3",
                    call_calling: "https://cdn.discordapp.com/attachments/747533263341486212/839508147885703218/team-speak.mp3",
                    call_ringing: "https://cdn.discordapp.com/attachments/747533263341486212/839508089312247809/hey-wake-up.mp3",
                    stream_started: "https://cdn.discordapp.com/attachments/747533263341486212/839507465107800074/user-in-your-channel-started-recording.mp3",
                    stream_ended: "https://cdn.discordapp.com/attachments/747533263341486212/839507467536695396/user-in-your-channel-stopped-recording.mp3",
                    stream_user_joined: "https://cdn.discordapp.com/attachments/747533263341486212/839447031898570752/User_joined_your_channel_sound_xd.mp3",
                    stream_user_left: "https://cdn.discordapp.com/attachments/747533263341486212/839453090578432030/User_left_your_channel.mp3"
                }
            }
        ]
        BdApi.saveData("SoundPack", "packs", data)
        return data;
    }

    stop() {
        const req = typeof(webpackJsonp) === "function" ? webpackJsonp([], {
            '__extra_id__': (module, exports, req) => exports.default = req
        }, ['__extra_id__']).default : webpackJsonp.push([[], {
            '__extra_id__': (module, exports, req) => module.exports = req
        }, [['__extra_id__']]]);
        delete req.m['__extra_id__'];
        delete req.c['__extra_id__'];

        req(1211).default.getCurrentConfig({}).allowSoundpacks = !1
    }
}