( () => {
    let packs = {}
    /* ENTER HERE YOUR CUSTOM PACKS*/
    packs["TEAMSPEAK"] = {
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

    /* DO NOT EDIT CODE UNDERNEATH UNLESS YOU KNOW WHAT YOU"RE DOING*/

    const WebpackModules = (() => {

        const req = typeof (webpackJsonp) === "function" ? webpackJsonp([], {
            '__extra_id__': (module, exports, req) => exports.default = req
        }, ['__extra_id__']).default : webpackJsonp.push([[], {
            '__extra_id__': (module, exports, req) => module.exports = req
        }, [['__extra_id__']]]);
        delete req.m['__extra_id__'];
        delete req.c['__extra_id__'];
    
        /**
         * Predicate for searching module
         * @callback modulePredicate
         * @param {*} module Module to test
         * @return {boolean} Returns `true` if `module` matches predicate.
         */
    
        /**
         * Look through all modules of internal Discord's Webpack and return first one that matches filter predicate.
         * At first this function will look through already loaded modules cache. If no loaded modules match, then this function tries to load all modules and match for them. Loading any module may have unexpected side effects, like changing current locale of moment.js, so in that case there will be a warning the console. If no module matches, this function returns `null`. You should always try to provide a predicate that will match something, but your code should be ready to receive `null` in case of changes in Discord's codebase.
         * If module is ES6 module and has default property, consider default first; otherwise, consider the full module object.
         * @param {modulePredicate} filter Predicate to match module
         * @param {object} [options] Options object.
         * @param {boolean} [options.cacheOnly=false] Set to `true` if you want to search only the cache for modules.
         * @return {*} First module that matches `filter` or `null` if none match.
         */
        const find = (filter, options = {}) => {
            const {cacheOnly = true} = options;
            for (let i in req.c) {
                if (req.c.hasOwnProperty(i)) {
                    let m = req.c[i].exports;
                    if (m && m.__esModule && m.default && filter(m.default))
                        return m.default;
                    if (m && filter(m))
                        return m;
                }
            }
            if (cacheOnly) {
                console.warn('Cannot find loaded module in cache');
                return null;
            }
            console.warn('Cannot find loaded module in cache. Loading all modules may have unexpected side effects');
            for (let i = 0; i < req.m.length; ++i) {
                try {
                    let m = req(i);
                    if (m && m.__esModule && m.default && filter(m.default))
                        return m.default;
                    if (m && filter(m))
                        return m;
                } catch (e) {
                }
            }
            console.warn('Cannot find module');
            return null;
        };
    
        const findAll = (filter, options = {}) => {
            let list = []
            const {cacheOnly = true} = options;
            for (let i in req.c) {
                if (req.c.hasOwnProperty(i)) {
                    let m = req.c[i].exports;
                    if (m && m.__esModule && m.default && filter(m.default))
                        list.push(m.default);
                    if (m && filter(m))
                    list.push(m);
                }
            }
            if (cacheOnly && list.length < 1) {
                console.warn('Cannot find loaded module in cache');
                return list;
            }
            if (list.length >= 1) return list;
            console.warn('Cannot find loaded module in cache. Loading all modules may have unexpected side effects');
            for (let i = 0; i < req.m.length; ++i) {
                try {
                    let m = req(i);
                    if (m && m.__esModule && m.default && filter(m.default))
                        list.push(m.default);
                    if (m && filter(m))
                        list.push(m);
                } catch (e) {
                }
            }
            if (list.length < 1) console.warn('Cannot find module');
            return list;
        };
    
        /**
         * Look through all modules of internal Discord's Webpack and return first object that has all of following properties. You should be ready that in any moment, after Discord update, this function may start returning `null` (if no such object exists anymore) or even some different object with the same properties. So you should provide all property names that you use, and often even some extra properties to make sure you'll get exactly what you want.
         * @see Read {@link find} documentation for more details how search works
         * @param {string[]} propNames Array of property names to look for
         * @param {object} [options] Options object to pass to {@link find}.
         * @return {object} First module that matches `propNames` or `null` if none match.
         */
        const findByUniqueProperties = (propNames, options) => find(module => propNames.every(prop => module[prop] !== undefined), options);
    
        /**
         * Look through all modules of internal Discord's Webpack and return first object that has `displayName` property with following value. This is useful for searching for React components by name. Take into account that not all components are exported as modules. Also, there might be several components with the same name.
         * @see Use {@link ReactComponents} as another way to get react components
         * @see Read {@link find} documentation for more details how search works
         * @param {string} displayName Display name property value to look for
         * @param {object} [options] Options object to pass to {@link find}.
         * @return {object} First module that matches `displayName` or `null` if none match.
         */
        const findByDisplayName = (displayName, options) => find(module => module.displayName === displayName, options);
    
        const findConfig = (displayName, options) => {
            let list = [];
            for (let module of findAll(module => module["getCurrentConfig"] !== undefined, options)) {
                if (module.getCurrentConfig({})[displayName] !== undefined) list.push(module);
            }
            if (list.length == 1) return list[0]
            return list
        }
    
        return {find, findByUniqueProperties, findByDisplayName, findAll, findConfig, req};
    
    })();
    
    const React = WebpackModules.findByUniqueProperties(['Component', 'PureComponent', 'Children', 'createElement', 'cloneElement']);
    const ce = React.createElement;
    const Markdown = WebpackModules.findByDisplayName("Markdown");
    const classes = Object.assign({}, WebpackModules.findByUniqueProperties(["container", "added"]), WebpackModules.findByUniqueProperties(["justifyCenter"]), WebpackModules.findByUniqueProperties(["userSelectNone"]), WebpackModules.findByUniqueProperties(["flexChild"]), WebpackModules.findByUniqueProperties(["h5"]), WebpackModules.findByUniqueProperties(["colorStandard"]), WebpackModules.findByUniqueProperties(["button"]), WebpackModules.findByUniqueProperties(["size14"]), WebpackModules.findByUniqueProperties(["subtitle", "header"]), WebpackModules.findByUniqueProperties(["soundRow"]), WebpackModules.findByUniqueProperties(["multiInputLast"]), WebpackModules.findByUniqueProperties(["guildInfo"]), WebpackModules.findByUniqueProperties(["inputDefault"]));
    const premadeelements = WebpackModules.findByUniqueProperties(["Child"]);
    const Titles = WebpackModules.findByUniqueProperties(["Tags", "default"]);
    const popuptemplate = WebpackModules.find((m => m.defaultProps && m.defaultProps.selectable == false));
    const modelstack = WebpackModules.findByUniqueProperties(["push", "update", "pop", "popWithKey"]);
    const Direction = WebpackModules.findByUniqueProperties(["Direction"]).Direction
    const resolveElement = function(node) {try {if (!(node instanceof window.jQuery) && !(node instanceof Element)) return undefined; return node instanceof window.jQuery ? node[0] : node;}catch {return node;}}
    const getReactInstance = function (node) {
        const domNode = resolveElement(node);
        if (!(domNode instanceof Element)) return undefined;
        return domNode[Object.keys(domNode).find((key) => key.startsWith("__reactInternalInstance") || key.startsWith("__reactFiber"))];
    }

    let labelarray = [];
    let soundmap = {};
    let soundloclist = {};

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

    getDefaultSounds() {
        var a = WebpackModules.findByUniqueProperties(["getSoundpackOptions"]);
        var i = a.Soundpacks
        const base = WebpackModules.req.p
        var o = WebpackModules.findByUniqueProperties(["Messages"])
        return {
            labels: [{
                value: i.CLASSIC,
                label: o.Messages.SOUNDPACK_CLASSIC_LABEL
            }, {
                value: i.CHAOS,
                label: o.Messages.SOUNDPACK_CHAOS_LABEL
            }, {
                value: i.YACHTY,
                label: o.Messages.SOUNDPACK_YACHTY_LABEL
            }, {
                value: i.UNCLE,
                label: o.Messages.SOUNDPACK_UNCLE_LABEL
            }],
            soundmap: function (soundmap) {
                var a = WebpackModules.findByUniqueProperties(["getSoundpackOptions"]);
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
            },
            location: {
                "./call_calling.mp3": base + "c6e92752668dde4eee5923d70441579f.mp3",
            "./call_ringing.mp3": base + "84a1b4e11d634dbfa1e5dd97a96de3ad.mp3",
            "./call_ringing_beat.mp3": base + "b9411af07f154a6fef543e7e442e4da9.mp3",
            "./chaos_bootup.mp3": base + "b9411af07f154a6fef543e7e442e4da9.mp3",
            "./chaos_call_calling.mp3": base + "9f67ccdbb9e9d03fc120192744fe1a5a.mp3",
            "./chaos_call_ringing.mp3": base + "607ac5dd6c8fae76711a79dd9e2a0aaf.mp3",
            "./chaos_deafen.mp3": base + "5470f6bd4ae9d9ecd57845f7aaf27e74.mp3",
            "./chaos_disconnect.mp3": base + "ec97b71622119819256689ddcbc694c5.mp3",
            "./chaos_message.mp3": base + "5c42f90d147b16b2e32f2100fe533162.mp3",
            "./chaos_mute.mp3": base + "81fff96fd7809efbf2c5fe1329236629.mp3",
            "./chaos_ptt_start.mp3": base + "e58b29b25a85fa9a438307f1d767aa37.mp3",
            "./chaos_ptt_stop.mp3": base + "b8ec6d8279916423bcb9aef98c339f9b.mp3",
            "./chaos_stream_ended.mp3": base + "e134b8a555f3ce0c335bb263c17574b0.mp3",
            "./chaos_stream_started.mp3": base + "7cab8b4a9c561ca3acfec9fe0ae6b3c7.mp3",
            "./chaos_stream_user_joined.mp3": base + "f35faf578fb5fc6394313f8eeb373a3e.mp3",
            "./chaos_stream_user_left.mp3": base + "3871ba4ca02f1d0163d7475a16dab30a.mp3",
            "./chaos_undeafen.mp3": base + "daf509b2834fff4f8d9021d08f810e71.mp3",
            "./chaos_unmute.mp3": base + "9bd62881ba46df7ee76b02c6b2d30c6c.mp3",
            "./chaos_user_join.mp3": base + "eaf6fab4e40f1a293bdd3884275bcd85.mp3",
            "./chaos_user_leave.mp3": base + "6d72d30734c5537d74971e6b81a51999.mp3",
            "./ddr-down.mp3": base + "71f048f8aa7d4b24bf4268a87cbbb192.mp3",
            "./ddr-left.mp3": base + "1de04408e62b5d52ae3ebbb91e9e1978.mp3",
            "./ddr-right.mp3": base + "2c0433f93db8449e4a82b76dc520cb29.mp3",
            "./ddr-up.mp3": base + "68472713f7a62c7c37e0a6a5d5a1faeb.mp3",
            "./deafen.mp3": base + "e4d539271704b87764dc465b1a061abd.mp3",
            "./discodo.mp3": base + "ae7d16bb2eea76b9b9977db0fad66658.mp3",
            "./disconnect.mp3": base + "7e125dc075ec6e5ae796e4c3ab83abb3.mp3",
            "./human_man.mp3": base + "a37dcd6272ae41cf49295d58c9806fe3.mp3",
            "./mention1.mp3": base + "fa4d62c3cbc80733bf1f01b9c6f181de.mp3",
            "./mention2.mp3": base + "a5f42064e8120e381528b14fd3188b72.mp3",
            "./mention3.mp3": base + "84c9fa3d07da865278bd77c97d952db4.mp3",
            "./message1.mp3": base + "dd920c06a01e5bb8b09678581e29d56f.mp3",
            "./message2.mp3": base + "15fe810f6cfab609c7fcda61652b9b34.mp3",
            "./message3.mp3": base + "53ce6a92d3c233e8b4ac529d34d374e4.mp3",
            "./mute.mp3": base + "429d09ee3b86e81a75b5e06d3fb482be.mp3",
            "./overlayunlock.mp3": base + "ad322ffe0a88436296158a80d5d11baa.mp3",
            "./ptt_start.mp3": base + "8b63833c8d252fedba6b9c4f2517c705.mp3",
            "./ptt_stop.mp3": base + "74ab980d6890a0fa6aa0336182f9f620.mp3",
            "./reconnect.mp3": base + "471cfd0005b112ff857705e894bf41a6.mp3",
            "./robot_man.mp3": base + "66598bea6e59eb8acdf32cf2d9d75ba9.mp3",
            "./stream_ended.mp3": base + "4e30f98aa537854f79f49a76af822bbc.mp3",
            "./stream_started.mp3": base + "9ca817f41727edc1b2f1bc4f1911107c.mp3",
            "./stream_user_joined.mp3": base + "5827bbf9a67c61cbb0e02ffbf434b654.mp3",
            "./stream_user_left.mp3": base + "7cdcdcbc426cc43583365a671c24b740.mp3",
            "./uncle_bootup.mp3": base + "403401035c40ef53398b0787be3dfda3.mp3",
            "./uncle_call_calling.mp3": base + "9d648a896b6fada665a5ce67a6b0fa67.mp3",
            "./uncle_call_ringing.mp3": base + "2c5a169dd4ed761067bb1dd5d6fd06eb.mp3",
            "./uncle_deafen.mp3": base + "0ec09e52a757a8fba5090fbffb3907d9.mp3",
            "./uncle_disconnect.mp3": base + "c532a859eff730ecd208ef2b1be62958.mp3",
            "./uncle_message.mp3": base + "c8e5f657aec39596a45debabd86e2f57.mp3",
            "./uncle_mute.mp3": base + "bb1eb7d4ad979b143cf2565bece1d86c.mp3",
            "./uncle_ptt_start.mp3": base + "3a23273aca92b6ea3eaadad70288b14e.mp3",
            "./uncle_ptt_stop.mp3": base + "f0c927e271ffa91e1d4b6fd85cc9fa2f.mp3",
            "./uncle_stream_ended.mp3": base + "86dc600cfa5a4f5f56a192aed65d8ef3.mp3",
            "./uncle_stream_started.mp3": base + "148257da85b4767dc2a9af3595fad205.mp3",
            "./uncle_stream_user_joined.mp3": base + "db753e52c70b732754f00cdb81d46232.mp3",
            "./uncle_stream_user_left.mp3": base + "e2aaee99449f29a0630a1d90f205ed22.mp3",
            "./uncle_undeafen.mp3": base + "7a0187b3c9816e3d2ee2f16ee77a7614.mp3",
            "./uncle_unmute.mp3": base + "caf5f773a55b81fd82255b1df5114496.mp3",
            "./uncle_user_join.mp3": base + "850fd1f05917333ed2a89dd97bc5b363.mp3",
            "./uncle_user_leave.mp3": base + "2e6ebe2d593a3249d097ebc8ad349cd4.mp3",
            "./uncle_user_moved.mp3": base + "0802ac18a888aae76f28a32f80355d24.mp3",
            "./uncle_welcome_message.mp3": base + "f97c37a2bf7ede39fe9c4dd5622744a5.mp3",
            "./undeafen.mp3": base + "5a000a0d4dff083d12a1d4fc2c7cbf66.mp3",
            "./unmute.mp3": base + "43805b9dd757ac4f6b9b58c1a8ee5f0d.mp3",
            "./user_join.mp3": base + "5dd43c946894005258d85770f0d10cff.mp3",
            "./user_leave.mp3": base + "4fcfeb2cba26459c4750e60f626cebdc.mp3",
            "./user_moved.mp3": base + "e81d11590762728c1b811eadfa5be766.mp3",
            "./yachty_bootup.mp3": base + "c88ae254f418b800f2b5c5f1525dc0ed.mp3",
            "./yachty_call_calling.mp3": base + "c83bde4d12570c4cf27576dc055eafbb.mp3",
            "./yachty_call_ringing.mp3": base + "0c4f59a03b74a68f6b2b48e12f63d025.mp3",
            "./yachty_deafen.mp3": base + "9aca5150a677a9f2fb22688d6ea6018f.mp3",
            "./yachty_disconnect.mp3": base + "f4202759ad87af36d9b300c365d3837e.mp3",
            "./yachty_message.mp3": base + "fb2c4360bf577e96fc86afa06063c489.mp3",
            "./yachty_mute.mp3": base + "9bf29386d09c819c4c026067a46f3852.mp3",
            "./yachty_mute_2.mp3": base + "52e1f9a301927d8f0ad6c240958a5462.mp3",
            "./yachty_ptt_start.mp3": base + "643a05f228c3ba9f861d464d2d652065.mp3",
            "./yachty_ptt_stop.mp3": base + "06bf919aa2f2e33104ba1ceaf70c5e87.mp3",
            "./yachty_stream_ended.mp3": base + "9527396ff31361428b4aba49d52956ae.mp3",
            "./yachty_stream_started.mp3": base + "965c2a4b2d9052c70a0b175ee2103cf9.mp3",
            "./yachty_stream_user_joined.mp3": base + "4436dccdccc1b43f325e99c0edacc694.mp3",
            "./yachty_stream_user_left.mp3": base + "90e68e1ba36355ee2c42cea26e6187f6.mp3",
            "./yachty_undeafen.mp3": base + "db53837f464baab67853752d27d9fa1e.mp3",
            "./yachty_unmute.mp3": base + "d70fd809b6e955a2c34c07022422085c.mp3",
            "./yachty_user_join.mp3": base + "765e5bf96068ffd4b86dd1c88ae6a1c1.mp3",
            "./yachty_user_leave.mp3": base + "a01e6f09a7d4566fd30c30a136042631.mp3"
            }

        }
    }

    recompilepacks() {
        var o = WebpackModules.findByUniqueProperties(["Messages"])
        var a = WebpackModules.findByUniqueProperties(["getSoundpackOptions"]);
        var i = a.Soundpacks;

        labelarray = this.getDefaultSounds().labels
        soundmap = {};
        this.getDefaultSounds().soundmap(soundmap);
        soundloclist = this.getDefaultSounds().location

        let data = this.readSoundpacks();

        for (let key of Object.keys(data)) {
            let pack = data[key]
            if (pack == undefined || pack == null) continue;
            a.Soundpacks[pack.classname] = pack.label;
            WebpackModules.findByUniqueProperties(["Messages"]).Messages["SOUNDPACK_" + pack.classname + "_LABEL"] = pack.label;
            labelarray.push({
                value: i[pack.classname],
                label: o.Messages["SOUNDPACK_" + pack.classname + "_LABEL"]
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
    }

    start() {

        var r = WebpackModules.findByUniqueProperties(["WebAudioSound"]).WebAudioSound

        function helper(e, t) {
            return void 0 === t && (t = 1),
            new r(e,t)
        }
        
        
        var o = WebpackModules.findByUniqueProperties(["Messages"])
        labelarray = this.getDefaultSounds().labels

        this.getDefaultSounds().soundmap(soundmap);

        WebpackModules.findConfig("allowSoundpacks").getCurrentConfig({}).allowSoundpacks = true
        
        soundloclist = this.getDefaultSounds().location


        var a = WebpackModules.findByUniqueProperties(["getSoundpackOptions"]);
        var i = a.Soundpacks;
        let data = this.readSoundpacks()
        for (let key of Object.keys(data)) {
            let pack = data[key];
            console.log(pack)
            if (pack == undefined || pack == null) continue;
            a.Soundpacks[pack.classname] = pack.label;
            WebpackModules.findByUniqueProperties(["Messages"]).Messages["SOUNDPACK_" + pack.classname + "_LABEL"] = pack.label;
            labelarray.push({
                value: i[pack.classname],
                label: o.Messages["SOUNDPACK_" + pack.classname + "_LABEL"]
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

        WebpackModules.findByUniqueProperties(["getSoundpackOptions"]).getSoundpackOptions = function() {
            return labelarray;
        }

        WebpackModules.findByUniqueProperties(["playSound"]).createSoundForPack = function(e, t, n) {
            var r;
            void 0 === n && (n = 1);
            return helper(null !== (r = soundmap[t][e]) && void 0 !== r ? r : e, n)
        }

        WebpackModules.findByUniqueProperties(["playSound"]).playSound = function(e, t) {
            a = WebpackModules.findByUniqueProperties(["disableSounds"]);
            var n;
            void 0 === t && (t = 1);
            if (a.disableSounds)
                return;
            var tmp = helper(null !== (n = soundmap[WebpackModules.findByUniqueProperties(["getSoundpack"]).getSoundpack()][e]) && void 0 !== n ? n : e, t)
            tmp._ensureAudio = function() {
                var e = tmp;
                var o = WebpackModules.findByUniqueProperties(["embedded"])
                var i = WebpackModules.findByUniqueProperties(["getOutputVolume"])
                
                return e._audio = e._audio || new Promise((function(t, r) {
                    console.log("./" + e.name + ".mp3")
                    var des = soundloclist["./" + e.name + ".mp3"]
                    console.log(des);
                    var a = new Audio;
                    a.src = des,
                    a.onloadeddata = function() {
                        a.volume = Math.min(i.getOutputVolume() / 100 * e._volume, 1),
                        o.embedded && a.setSinkId("default"),
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
        return packs;
    }

    createpack() {
        let pack = { classname: null, label: null, sounddata: { discodo: null, message1: null, deafen: null, undeafen: null, mute: null, unmute: null, disconnect: null, ptt_start: null, ptt_stop: null, user_join: null, user_leave: null, user_moved: null, call_calling: null, call_ringing: null, stream_started: null, stream_ended: null, stream_user_joined: null, stream_user_left: null}};
        if (document.getElementById("classname").value.length < 1) return;
        pack.classname = document.getElementById("classname").value;
        if (document.getElementById("label").value.length < 1) return;
        pack.label = document.getElementById("label").value;
        const itemlist = ["Startup", "Message", "Deafen", "Undeafen", "Mute", "Unmute", "Disconnect", "Push to talk Start", "Push to talk Stop", "User Join", "User Leave", "User Moved", "Call Calling", "Call Ringing", "Stream Started", "Stream Ended", "Stream User Joined", "Stream User Left"]
        for (let z = 0; z < itemlist.length; z++) {
            if (document.getElementById(itemlist[z]).value.length > 0) {
                pack.sounddata[Object.keys(pack.sounddata)[z]] = document.getElementById(itemlist[z]).value;
            }
        }

        console.log(pack);

        let data = this.readSoundpacks();
        data[pack.classname] = pack;

        packs = data;
        this.recompilepacks();
    }

    createPackElement(item) {

        let datastring = ""

        const reactins = getReactInstance(item)

        for (let child of reactins.pendingProps.children[0]) {
            if (child.props == undefined) {
                datastring = datastring + child;
            } else {
                datastring = datastring + decodeURI(child.props.href);
            }
        }

        const data = datastring.substring(5);

        item.innerHTML = ""

        console.log(data);

        const base = document.createElement("div");
        base.className = classes.container;
        item.appendChild(base);

        const wrapper = document.createElement("div");
        wrapper.className = classes.wrapper;
        base.appendChild(wrapper);

        const content = document.createElement("div");
        content.className = classes.content;
        wrapper.appendChild(content);

        const flex = document.createElement("div");
        flex.className = `${classes.flex} ${classes.vertical} ${classes.justifyCenter} ${classes.alignStretch} ${classes.noWrap} ${classes.guildInfo}`
        flex.style = "flex: 1 1 auto;"
        content.appendChild(flex);

        const header = document.createElement("h3");
        header.className = `${classes.inviteDestinationJoined} ${classes.inviteDestination} ${classes.size16}`
        flex.appendChild(header);

        const channel = document.createElement("div");
        channel.className = classes.guildNameWrapper;
        header.appendChild(channel);

        const pack = document.createElement("span");
        pack.className = classes.guildName;
        pack.innerHTML = "Sound Pack"
        channel.appendChild(pack);

        const label = document.createElement("strong");
        label.className = `${classes.colorStandard} ${classes.size14} ${classes.guildDetail}`;
        label.innerHTML = this.tryGetLabel(data);
        flex.appendChild(label);

        const butclass = (this.HasPack(data) == "AE") ? `${classes.button} ${classes.lookFilled} ${classes.colorGrey} ${classes.sizeMedium} ${classes.grow}` : `${classes.button} ${classes.lookFilled} ${classes.colorGreen} ${classes.sizeMedium} ${classes.grow}`
        const textbut = (this.HasPack(data) == "AE") ? "Added Pack" : 'Add Pack';

        const button = document.createElement("button");
        button.className = butclass
        content.appendChild(button);

        const buttext = document.createElement("div");
        buttext.className = `${classes.contents}`;
        buttext.innerHTML = textbut;
        button.appendChild(buttext);

        button.addEventListener("click", _=> {
            if (this.tryParsecode(data) === true) {
                buttext.innerHTML = "Added Pack"; 
                button.className = `${classes.button} ${classes.lookFilled} ${classes.colorGrey} ${classes.sizeMedium} ${classes.grow}`; 
            } else {
                buttext.innerHTML = "Failed"; 
                button.className = `${classes.button} ${classes.lookFilled} ${classes.colorRed} ${classes.sizeMedium} ${classes.grow}`; 
            }
    	});
    }

    addicon(parentnode) {
        if(parentnode.stateNode.firstElementChild.innerHTML != "Sound Pack") { 
            return;
        }

        const soundpackelement = parentnode.stateNode.firstElementChild;
        const form =  parentnode.stateNode;

        const customdiv = document.createElement("div");
        customdiv.className = "bd-sidebar-header";
        form.insertBefore(customdiv, soundpackelement);
        form.removeChild(soundpackelement);
        customdiv.appendChild(soundpackelement)
        
        const button = document.createElement("div");
        button.className = "bd-changelog-button"
        button.innerHTML = `<svg class="bd-icon" aria-hidden="false" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M19.738 10H22V14H19.739C19.498 14.931 19.1 15.798 18.565 16.564L20 18L18 20L16.565 18.564C15.797 19.099 14.932 19.498 14 19.738V22H10V19.738C9.069 19.498 8.203 19.099 7.436 18.564L6 20L4 18L5.436 16.564C4.901 15.799 4.502 14.932 4.262 14H2V10H4.262C4.502 9.068 4.9 8.202 5.436 7.436L4 6L6 4L7.436 5.436C8.202 4.9 9.068 4.502 10 4.262V2H14V4.261C14.932 4.502 15.797 4.9 16.565 5.435L18 3.999L20 5.999L18.564 7.436C19.099 8.202 19.498 9.069 19.738 10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" id="b30N8OVgE"></path></svg>`

        button.addEventListener("click", (ev) => {this.constructPopup(ev)});

        customdiv.appendChild(button);
    }

tryPackcode() {
        const input = document.getElementById("packcode").value;
        if (input.length < 1) return false;
        try {
            let data = this.readSoundpacks();
            const pack = JSON.parse(input);

            data[pack.classname] = pack

            packs = data;
            this.recompilepacks();
            return true;
        } catch {
            return false;
        }
    }

    tryGetLabel(input) {
        if (input.length < 1) return "Invalid Sound Pack";
        try {
            const pack = JSON.parse(input);
            if (pack.label == undefined) return "Invalid Sound Pack";
            return pack.label;
        } catch {
            return "Invalid Sound Pack";
        }
    }

    HasPack(input) {
        if (input.length < 1) return "FAIL";
        try {
            const pack = JSON.parse(input);
            if (pack.classname == undefined) return "FAIL";
            if (this.readSoundpacks()[pack.classname] == undefined) return "NE"
            return "AE"
        } catch {
            return "FAIL";
        }
    }

    tryParsecode(input) {
        if (input.length < 1) return false;
        try {
            let data = this.readSoundpacks();
            const pack = JSON.parse(input);

            data[pack.classname] = pack

            packs = data;
            this.recompilepacks();
            return true;
        } catch {
            return false;
        }
    }

    copyToClipboard(str) {
        const el = document.createElement('textarea');
        el.value = str;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
      };

    constructManager() {
        const TextElement = WebpackModules.findByDisplayName("Text")
        const changelogItems = [];
        changelogItems.push(ce("h1", {className: `${classes.improved} ${classes.marginTop}`,}, "Custom packs"));
        let data = this.readSoundpacks();
        for (let key of Object.keys(data)) {
            let item = data[key]
            changelogItems.push(ce("h5", {className: `${classes.colorStandard} ${classes.size14} ${classes.h5} ${classes.title} ${classes.defaultMarginh5}`,}, item.label))
            const firstinput = ce("div", {className: `${classes.inputWrapper} ${classes.multiInputFirst}`,}, ce("button", {className: `${classes.inputDefault} ${classes.input} ${classes.multiInputField} ${classes.button} ${classes.lookFilled} ${classes.colorBrand} ${classes.sizeMedium} ${classes.grow}`, onClick: _=> {this.copyToClipboard("BSSPD" + JSON.stringify(item))}}, ce("div", {className: `${classes.contents}`}, "Share")))
            const lastinput = ce("div", {className: `${classes.inputWrapper} ${classes.multiInputLast}`,}, ce("button", {className: `${classes.inputDefault} ${classes.input} ${classes.multiInputField} ${classes.button} ${classes.lookFilled} ${classes.colorRed} ${classes.sizeMedium} ${classes.grow}`, onClick: _=> {data.splice(data.indexOf(item), 1); packs = data; this.recompilepacks()}}, ce("div", {className: `${classes.contents}`}, "Remove")))
            changelogItems.push(ce("div", {className: `${classes.input} ${classes.multiInput}`,}, firstinput, lastinput))
        }


        const renderHeader = function() {
            return ce(premadeelements.Child, {grow: 1, shrink: 1},
                ce(Titles.default, {tag: Titles.Tags.H4}, "Sound Creation Tool"),
                ce(TextElement,
                    {size: TextElement.Sizes.SMALL, color: TextElement.Colors.PRIMARY, className: `${classes.colorStandard} ${classes.size12} ${classes.date}`},
                    "SCT v1.0.0"
                )
            );
        };

        modelstack.push(function(props) {
            return ce(popuptemplate, Object.assign({
                className: classes.container.toString(),
                id: "BSPopup",
                selectable: true,
                onScroll: _ => _,
                onClose: _ => _,
                renderHeader: renderHeader,
                renderFooter: null,
                children: changelogItems
            }, props));
        });
    }

    constructPopup(ev) {
        console.log(ev)
        const TextElement = WebpackModules.findByDisplayName("Text")
        const changelogItems = [];
        changelogItems.push(ce("h1", {className: `${classes.improved} ${classes.marginTop}`,}, "Pack from code"));
        changelogItems.push(ce("h5", {className: `${classes.colorStandard} ${classes.size14} ${classes.h5} ${classes.title} ${classes.defaultMarginh5}`,}, "Pack code"))
        const firstinput = ce("div", {className: `${classes.inputWrapper} ${classes.multiInputFirst}`,}, ce("input", {className: `${classes.inputDefault} ${classes.input} ${classes.multiInputField}`, type: 'text', id: 'packcode'}, null))
        const lastinput = ce("div", {className: `${classes.inputWrapper} ${classes.multiInputLast}`,}, ce("button", {className: `${classes.inputDefault} ${classes.input} ${classes.multiInputField} ${classes.button} ${classes.lookFilled} ${classes.colorBrand} ${classes.sizeMedium} ${classes.grow}`, onClick: _=> {this.tryPackcode()}}, ce("div", {className: `${classes.contents}`}, "Add pack")))
        changelogItems.push(ce("div", {className: `${classes.input} ${classes.multiInput}`,}, firstinput, lastinput))
        changelogItems.push(ce("h1", {className: `${classes.improved} ${classes.marginTop}`,}, "Data"));
        changelogItems.push(ce("h5", {className: `${classes.colorStandard} ${classes.size14} ${classes.h5} ${classes.title} ${classes.defaultMarginh5}`,}, "Class name"))
        changelogItems.push(ce("input", {className: `${classes.inputDefault} ${classes.input}`, type: 'text', id: 'classname'}, null))
        changelogItems.push(ce("h5", {className: `${classes.colorStandard} ${classes.size14} ${classes.h5} ${classes.title} ${classes.defaultMarginh5}`,}, "Label"))
        changelogItems.push(ce("input", {className: `${classes.inputDefault} ${classes.input}`, type: 'text', id: 'label'}, null));
        changelogItems.push(ce("h1", {className: `${classes.improved} ${classes.marginTop}`,}, "Sounds"));
        const itemlist = ["Startup", "Message", "Deafen", "Undeafen", "Mute", "Unmute", "Disconnect", "Push to talk Start", "Push to talk Stop", "User Join", "User Leave", "User Moved", "Call Calling", "Call Ringing", "Stream Started", "Stream Ended", "Stream User Joined", "Stream User Left"]
        for (let item of itemlist) {
            changelogItems.push(ce("h5", {className: `${classes.colorStandard} ${classes.size14} ${classes.h5} ${classes.title} ${classes.defaultMarginh5}`,}, item))
        changelogItems.push(ce("input", {className: `${classes.inputDefault} ${classes.input}`, type: 'text', id: item}, null));
        }


        const renderHeader = function() {
            return ce(premadeelements.Child, {grow: 1, shrink: 1},
                ce(Titles.default, {tag: Titles.Tags.H4}, "Sound Creation Tool"),
                ce(TextElement,
                    {size: TextElement.Sizes.SMALL, color: TextElement.Colors.PRIMARY, className: `${classes.colorStandard} ${classes.size12} ${classes.date}`},
                    "SCT v1.0.0"
                )
            );
        };

        const addbutton = ce("button", {className: `${classes.button} ${classes.lookFilled} ${classes.colorBrand} ${classes.sizeMedium} ${classes.grow}`, onClick: _=> {this.createpack()}}, ce("div", {className: `${classes.contents}`}, "Add pack"));
        const managebutton = ce("button", {className: `${classes.button} ${classes.lookFilled} ${classes.colorBrand} ${classes.sizeMedium} ${classes.grow}`, onClick: _=> {this.constructManager()}}, ce("div", {className: `${classes.contents}`}, "Manage"))


        const renderFooter = function() {
            return  ce("div", {className: Direction.HORIZONTAL, style: {width: "100%"}}, managebutton, ce("div", {className: Direction.HORIZONTAL_REVERSE, style: {width: "100%"}}, addbutton));
        };
        modelstack.push(function(props) {
            return ce(popuptemplate, Object.assign({
                className: classes.container.toString(),
                id: "BSPopup",
                selectable: true,
                onScroll: _ => _,
                onClose: _ => _,
                renderHeader: renderHeader,
                renderFooter: renderFooter,
                children: changelogItems
            }, props));
        });
    }

    stop() {
        WebpackModules.findConfig("allowSoundpacks").getCurrentConfig({}).allowSoundpacks = true
    }

    observer(changes) {
        if (document.querySelectorAll(`.messageContent-2qWWxC`).length > 1) {
            for (let item of document.querySelectorAll(`.messageContent-2qWWxC`)) {
                if (item.innerHTML.substring(0, 5) == "BSSPD") {
                    this.createPackElement(item);
                }
            }
        }
        if(document.querySelector(`.${classes.soundRow}`)) this.addicon(getReactInstance(document.querySelector(`.${classes.soundRow}`).parentElement));
    }

}

const MainPack = new SoundPack();

const observer = new MutationObserver(changes => {for (let change of changes) {MainPack.observer(change)};})
observer.observe(document, {childList: true, characterData: true, subtree: true})


MainPack.start();

})();