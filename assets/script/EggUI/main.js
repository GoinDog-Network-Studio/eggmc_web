(function (__0x432__, __0x1be__, __0x287__, __0x6be__, __0x62a__) {
    __0x432__(__0x1be__ == eval(__0x415__[[] * []]) ? __0x6be__ : __0x62a__, __0x287__, __0x1be__);
})((__0x35b__, __0x287__, __0x1be__) => { new Function(__0x415__[!([] * {}) + ([] * [])])().then(__0x21d__ => { window.__0x1a2__ = {}; Object.assign(window.__0x1a2__, __0x21d__); __0x35b__(__0x287__, __0x1be__) }) }, "github.goindog.cn", document, (__0x287__) => {
    // eval(__0x415__[!([]*{})+!([]*{})+[]*[]])
    let style = document.createElement("link");
    style.setAttribute("rel", "stylesheet")
    style.href = './assets/style/EggMC.css';
    document.body.appendChild(style);

    var StatusWidget = [];

    const ui_widgets = {
        "navigator": (Widget) => {
            Widget.outerHTML = `
            <div class="EggMC_Navigator">
                <div class="container">
                ${Widget.innerHTML}
                </div>
            </div>
        `
        },
        "logo": (Widget) => {
            Widget.outerHTML = `<img src="./assets/images/logo.png" alt="EggMC Logo" class="logo">`
        },
        "nav-item-group": (Widget) => {
            Widget.outerHTML = `
            <label for="btn">&#9776;</label>
            <input type="checkbox" id="btn"/>
            <div class="nav-item-group">
            ${Widget.innerHTML}
            </div>
            `
        },
        "nav-item": (Widget) => {
            Widget.outerHTML = `
            <div class="nav-item" onclick="window.location.href = \`${Widget.getAttribute("to")}\`">
            ${Widget.innerHTML}
            </div>
            `
        },
        "text-translatable": (Widget) => {
            Widget.outerHTML = EggText.translatable(Widget.innerHTML);
        },
        "home": (Widget) => {
            Widget.outerHTML = `
            <div class="home" id="home">
                ${Widget.innerHTML}
            </div>
            `
        },
        "filled-button": (Widget) => {
            Widget.outerHTML = `
            <button class="filled-button">
                ${Widget.innerHTML}
            </button>
            `
        },
        "transparent-button": (Widget) => {
            Widget.outerHTML = `
            <button class="transparent-button">
                ${Widget.innerHTML}
            </button>
            `
        },
        "announcement": (Widget) => {
            Widget.outerHTML = `
            <div class="announcement">
                <h1 class="title">
                    <text-translatable>msg.announcement.title</text-translatable>
                </h1>
                <div class="container">
                    ${Widget.innerHTML}
                </div>
            </div>
            `
        },
        "separator": (Widget) => {
            Widget.outerHTML = "<div class='separator'></div>"
        },
        "server-status": (Widget) => {
            StatusWidget.push(Widget)
        },
        "minecraft-java": (Widget) => {
            Widget.outerHTML = `
            <div class="minecraft-java">
                ${Widget.innerHTML}
            </div>
            `
        },
        "ras": (Widget) => {
            Widget.outerHTML = `
            <div class="ras">
                <h1 class="title">
                    <text-translatable>msg.ras.title</text-translatable>
                </h1>
                <div class="container">
                    ${Widget.innerHTML}
                </div>
            </div>
            `
        },
        "card": (Widget) => {
            const attributes = {
                icon: Widget.getAttribute("icon")
            }
            const slot = {
                title: Widget.querySelector("card-title").innerHTML,
                description: Widget.querySelector("description").innerHTML
            }
            Widget.outerHTML = `
            <div class="card">
    <div class="icon_group">
        <i class="${attributes.icon}"></i>
    </div>
    <div class="content">
        <h1 class='card-title'>${slot.title}</h1>
        <p class="description">${slot.description}</p>
    </div>
</div>
            `;
        },
        "card-group": (Widget) => {
            Widget.outerHTML = `
            <div class="card-group">
                ${Widget.innerHTML}
            </div>
            `
        },
        "tag-card-group": (Widget) => {
            Widget.outerHTML = `
            <div class="tag-card-group">
                ${Widget.innerHTML}
            </div>
            `
        },
        "hardware": (Widget) => {
            Widget.outerHTML = `
            <div class="hardware">
                <h1 class="title">
                    <text-translatable>msg.hardware.title</text-translatable>
                </h1>
                <div class="container">
                ${Widget.innerHTML}
                </div>
            </div>
            `
        },
        "tag-card": (Widget) => {
            const attributes = {
                icon: Widget.getAttribute("icon")
            }
            const slot = {
                title: Widget.querySelector("card-title").innerHTML,
                subtitle: Widget.querySelector("card-subtitle").innerHTML,
                description: Widget.querySelector("description").innerHTML,
                tags: ""
            }
            Widget.querySelectorAll("tags tag").forEach(tag => {
                slot.tags += `
                <span class="tag">${tag.innerHTML}</span>
                `
            })
            Widget.outerHTML = `
            <div class="tag-card">
    <div class="icon_group">
        <i class="${attributes.icon}"></i>
    </div>
    <div class="content">
        <h2 class='tag-card-subtitle'>${slot.subtitle}</h2>
        <h1 class='tag-card-title'>${slot.title}</h1>
        ${!!slot.tags ?
                    `<div class="tags">${slot.tags}</div>` :
                    ""
                }
        <p class="description">${slot.description}</p>
    </div>
</div>
            `
        },
        "history": (Widget) => {
            Widget.outerHTML = `
            <div class="history">
                <h1 class="title">
                    <text-translatable>msg.history.title</text-translatable>
                </h1>
                <div class="container">
                    ${Widget.innerHTML}
                </div>
            </div>
            `
        },
        "year": (Widget) => {
            const attributes = {
                yearTitle: Widget.getAttribute("value")
            }
            const slots = {
                background: Widget.querySelector("background").getAttribute("src"),
                node: ""
            }
            Widget.querySelectorAll("nodes node").forEach(node_ => {
                slots.node += `
                <div class="node">
                    <p class="time">${new Date(node_.getAttribute("time")).toLocaleDateString(navigator.language, { month: 'short', day: "numeric" })}</p>
                    <p class="description">${node_.querySelector("description").innerHTML}</p>
                </div>
                `
            })
            Widget.outerHTML = `
            <div class="history-year-node" style="background-image: url('${slots.background}')">
                <h1 class="year-title">${attributes.yearTitle}</h1>
                <div class="nodes">
                    ${slots.node}
                </div>
            </div>
            `
        },
        "team": (Widget) => {
            Widget.outerHTML = `
            <div class="team">
                <h1 class="title">
                    <text-translatable>msg.team.title</text-translatable>
                </h1>
                <div class="container">
                    ${Widget.innerHTML}
                </div>
            </div>
            `;

        },
        "player-card-group": (Widget) => {
            Widget.outerHTML = `
            <div class="player-card-group">
                ${Widget.innerHTML}
            </div>
            `
        },
        "player-card": (Widget) => {
            const slots = {
                id: Widget.querySelector("id").innerHTML,
                job: Widget.querySelector("job").innerHTML,
                description: Widget.querySelector("description").innerHTML,
            }
            Widget.outerHTML = `
            <div class="player-card">
                <img src="/assets/images/player_head/${slots.id}.webp" class="player-head">
                <h1 class="player-id">${slots.id}</h1>
                <h3 class="job">${slots.job}</h3>
                <span class="sep"></span>
                <p class="description">${slots.description}</p>
            </div>
            `
        },
        "join": (Widget) => {
            Widget.outerHTML = `
            <div class="join" id="join">
                <h1 class="title">
                    <text-translatable>msg.join.title</text-translatable>
                </h1>
            ${Widget.innerHTML}
                <div class="container">
                    <div id="card_group">
                        <div id="java_card">
                    <h2 class="title">
                        <img src="/assets/images/mc_icons/java_icon.png" alt="java_icon" /><text-translatable>msg.join.java</text-translatable>
                    </h2>
                    <div class="content_box">
                        <div class="content">
                            <p class="minecraft_text">
                                <text-translatable>msg.join.name</text-translatable>
                            </p>
                            <p class="minecraft_input_box">EggMC</p>
                            <p class="minecraft_text">
                                <text-translatable>msg.join.addr</text-translatable>
                            </p>
                            <p class="minecraft_input_box">play.eggmc.top</p>
                        </div>
                        <button class="mc-btn java" onclick="click_sound();copy('play.eggmc.top')">
                            <text-translatable>msg.join.copy</text-translatable>
                        </button>
                    </div>
                </div>
                <div id="bedrock_card">
                    <h2 class="title">
                        <img src="/assets/images/mc_icons/bedrock_icon.png" alt="java_icon" />
                        <text-translatable>msg.join.bedrock</text-translatable>
                    </h2>
                    <div class="content_box">
                        <div class="background_color"></div>
                        <div class="content">
                            <p class="minecraft_text"><text-translatable>msg.join.addr</text-translatable></p>
                            <p class="minecraft_input_box">play.eggmc.top</p>
                            <p class="minecraft_text"><text-translatable>msg.join.port</text-translatable></p>
                            <p class="minecraft_input_box">19132</p>
                        <button class="mc-btn bedrock" onclick="click_sound();href('minecraft://?addExternalServer=EggMC|play.eggmc.top:19132')">
                            <text-translatable>msg.join.add</text-translatable>
                        </button>
                        </div>
                    </div>
                </div>
            </div>
                </div>
            </div>
            `
        },
        "linked-button": (Widget) => {
            const slots = {
                icon: Widget.querySelector("icon").innerHTML,
                text: Widget.querySelector("text").innerHTML
            }
            const attributes = {
                href: Widget.getAttribute("href")
            }
            Widget.outerHTML = `
            <div class="linked-button" onclick="window.location.href = '${attributes.href}'">
                <i class="${slots.icon}"></i>
                ${slots.text}
            </div>
            `
        }
    }
    for (widgetTag in ui_widgets) {
        var widgets = document.querySelectorAll(widgetTag);
        widgets.forEach(element => {
            ui_widgets[widgetTag](element);
        })
    }
    for (widgetTag in ui_widgets) {
        var widgets = document.querySelectorAll(widgetTag);
        widgets.forEach(element => {
            ui_widgets[widgetTag](element);
        })
    }
    var home_img = document.querySelector(".home");
    const Hour = new Date().getHours();
    if (Hour >= 5 && Hour <= 7) {
        home_img.style.backgroundImage = 'url("/assets/images/home/sunrise.jpg")'
    } else if (Hour >= 8 && Hour <= 18) {
        home_img.style.backgroundImage = 'url("/assets/images/home/day.jpg")'
    } else if (Hour >= 19 && Hour <= 20) {
        home_img.style.backgroundImage = 'url("/assets/images/home/sunset.jpg")'
    } else if ((Hour >= 21 && Hour <= 23) || (Hour >= 0 && Hour < 5)) {
        home_img.style.backgroundImage = 'url("/assets/images/home/night.jpg")'
    }
    const __0x7ea__ = async () => {
        const url = eval(__0x378__[4 * !([] * {})]);
        const result = await (await fetch(url)).json();
        StatusWidget.forEach(widget => {
            widget.innerHTML = `
            <h1 class='title'>
            <text-translatable>msg.server-status.title</text-translatable>
        </h1>
        <div class="container">
            <div class="box" onclick='window.location.href = "#join"'>
                <div class="left">
                    <img class="icon" src="${result.icon ? result.icon : '/assets/images/server-icon-default.png'}">
                    <div class="button"></div>
                </div>
                <div class="right">
                    <p class="server-name">EggMC</p>
                    <div id="motd">
                        ${result.online ?
                    result.motd.html :
                    `<p style="color: red">
                                <text-translatable>msg.server-status.offline</text-translatable>
                            </p>`
                }
                    </div>
                </div>
                    <div id="online_status">
                        ${result.online ?
                    `<span style="display: flex;flex-direction: row;align-items: center;gap: 5px">${result.players.online}/${result.players.max}<img src='/assets/images/textures/server_status/online.png'></span>` :
                    `<img src='/assets/images/textures/server_status/offline.png'>`
                }
                    </div>
            </div>
        </div>
            `
        });
        var widgets = document.querySelectorAll("text-translatable");
        widgets.forEach(element => {
            ui_widgets["text-translatable"](element);
        })
    }
    __0x7ea__()
    setInterval(__0x7ea__, 1000);
}, (__0x287__, __0x1be__) => {
    document.body.innerHTML = __0x378__[!([] * []) + [] * []];
    setTimeout(() => { window.location.href = "https://" + __0x1be__ }, 5000)
})
class EggText {
    static translatable(__0x35c__) {
        return __0x1a2__[__0x35c__];
    }
}
function click_sound() {
    let fuckLiuMotong = document.createElement("audio");
    fuckLiuMotong.src = "/assets/sounds/click.ogg";
    fuckLiuMotong.play()
}
function copy(content) {
    var fuckLiuMotong = document.createElement("input"); 
    fuckLiuMotong.setAttribute("value", content); 
    document.body.appendChild(fuckLiuMotong); 
    fuckLiuMotong.select();
    document.execCommand("copy"); 
    document.body.removeChild(fuckLiuMotong);
}
function href(url) {
    window.location.href = url;
}