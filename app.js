/* ==========================================================================
   HeritageLens AI Core Application Logic
   Bilingual Data, Scanning Simulations, Speech Synthesis, & Bookmarks
   ========================================================================== */

// 1. Bilingual Monument Database with expanded fields (Confidence & Tourism)
const monumentDatabase = {
    taj_mahal: {
        confidence: 100,
        en: {
            name: "Taj Mahal",
            history: "Commissioned by Mughal Emperor Shah Jahan in 1632 in memory of his favorite wife, Mumtaz Mahal. It serves as a monumental tribute of eternal love and took over 20 years to build.",
            architecture: "Masterpiece of Mughal architecture, blending Persian, Islamic, Ottoman Turkish, and Indian artistic traditions. Renowned for its white marble dome and perfect symmetry.",
            cultural: "Designated as a UNESCO World Heritage Site in 1983, it is regarded as the jewel of Muslim art in India and stands as one of the world's most iconic symbols of heritage.",
            facts: "Over 20,000 artisans contributed to its construction. The four minarets are tilted slightly outwards to protect the main dome in case of an earthquake.",
            story: "Standing gracefully on the banks of the Yamuna River, the Taj Mahal tells a timeless story of love, devotion, and architectural brilliance that continues to inspire generations.",
            tourism: "Best visited at sunrise to avoid crowds and harsh midday sun. The monument is closed on Fridays. Agra Fort and Fatehpur Sikri are excellent surrounding heritage sites."
        },
        hi: {
            name: "ताज महल",
            history: "मुगल सम्राट शाहजहाँ द्वारा 1632 में अपनी पसंदीदा पत्नी मुमताज महल की याद में बनवाया गया था। यह शाश्वत प्रेम की एक विशाल श्रद्धांजलि है और इसे बनाने में 20 से अधिक वर्ष लगे थे।",
            architecture: "फारसी, इस्लामी, तुर्की और भारतीय कलात्मक परंपराओं का मिश्रण। यह अपने चमकदार सफेद संगमरमर के मुख्य गुंबद और उत्तम समरूपता के लिए प्रसिद्ध है।",
            cultural: "1983 में यूनेस्को विश्व धरोहर स्थल घोषित किया गया। इसे भारत में मुस्लिम कला का रत्न माना जाता है और यह दुनिया के सबसे प्रतिष्ठित प्रतीकों में से एक है।",
            facts: "इसके निर्माण में 20,000 से अधिक कारीगरों ने योगदान दिया। भूकंप की स्थिति में मुख्य गुंबद की रक्षा के लिए इसके चारों मीनारें थोड़ी बाहर की ओर झुकी हैं।",
            story: "यमुना नदी के तट पर भव्यता से खड़ा ताज महल प्रेम, समर्पण और स्थापत्य कला की एक कालजयी कहानी बयां करता है जो सदियों से पीढ़ियों को प्रेरित करती आ रही है।",
            tourism: "भीड़ और दोपहर की तेज़ धूप से बचने के लिए सूर्योदय के समय दर्शन करना सबसे अच्छा है। स्मारक शुक्रवार को बंद रहता है। आगरा का किला और फतेहपुर सीकरी भी देखने योग्य स्थान हैं।"
        }
    },
    colosseum: {
        confidence: 100,
        en: {
            name: "Colosseum",
            history: "An ancient amphitheater commissioned by Emperor Vespasian around 70-72 AD and completed in 80 AD under Emperor Titus. It hosted public spectacles and gladiatorial combats.",
            architecture: "Constructed using travertine, tuff, and brick-faced concrete, it utilized a complex network of vaulting systems and multi-layered arches to house up to 50,000 spectators.",
            cultural: "The defining monument of Rome, representing the immense power, imperial history, and advanced engineering prowess of the Roman Empire.",
            facts: "It is the largest standing amphitheater in the world. Originally featured a retractable awning system called the Velarium to shade spectators from the sun.",
            story: "Within the ancient walls of the Colosseum, echoes of cheering crowds, gladiatorial shields, and grand emperors tell the story of a civilization's rise, power, and theatrical genius.",
            tourism: "Advance online booking is mandatory. Best visited in the early morning. Combine with a visit to the nearby Roman Forum and Palatine Hill on a single ticket."
        },
        hi: {
            name: "कोलोसियम",
            history: "एक प्राचीन एम्फीथिएटर जिसका निर्माण 70-72 ईस्वी के आसपास सम्राट वेस्पेशियन द्वारा शुरू किया गया था और 80 ईस्वी में सम्राट टाइटस के तहत पूरा हुआ। यहाँ सार्वजनिक खेल और ग्लेडिएटर मुकाबले होते थे।",
            architecture: "ट्रैवर्टीन पत्थर, टफ और ईंटों से निर्मित। 50,000 से अधिक दर्शकों के बैठने के लिए इसमें तिजोरी प्रणाली और कंक्रीट के मेहराबों के जटिल जाल का उपयोग किया गया था।",
            cultural: "रोम का प्रमुख प्रतीक, जो रोमन साम्राज्य की विशाल शक्ति, साम्राज्यवादी इतिहास और उन्नत इंजीनियरिंग कौशल का प्रतिनिधित्व करता है।",
            facts: "यह दुनिया का सबसे बड़ा खड़ा एम्फीथिएटर है। मूल रूप से इसमें दर्शकों को धूप से बचाने के लिए वेलेरियम नामक वापस ली जा सकने वाली कपड़े की छत की व्यवस्था थी।",
            story: "कोलोसियम की प्राचीन दीवारों में, उत्साही भीड़, ग्लेडियेटर्स की ढालों और महान सम्राटों की गूंज एक साम्राज्य के उदय, शक्ति और नाटकीय प्रतिभा की कहानी सुनाती है।",
            tourism: "अग्रिम ऑनलाइन बुकिंग अनिवार्य है। सुबह जल्दी जाना सबसे अच्छा है। एक ही टिकट पर आस-पास के रोमन फोरम और पैलेटिन हिल की यात्रा को साथ में जोड़ें।"
        }
    },
    machu_picchu: {
        confidence: 100,
        en: {
            name: "Machu Picchu",
            history: "Constructed as a royal estate for the Inca emperor Pachacuti around 1450. It was abandoned during the Spanish conquest and remained hidden from the outer world until 1911.",
            architecture: "Built in classical Inca style, utilizing ashlar masonry where massive granite stones are cut and placed together tightly without any mortar.",
            cultural: "An extraordinary religious sanctuary and agricultural center, showing the Inca civilization's deep astronomical alignment and integration with nature.",
            facts: "Located 2,430 meters above sea level. The site was re-discovered to the international community by historian Hiram Bingham in 1911.",
            story: "Perched high in the misty Andes mountains, Machu Picchu stands as a silent sanctuary, whispering the secrets of an advanced empire that lived in harmony with the cosmos.",
            tourism: "Requires train and bus bookings weeks in advance from Cusco. Visitor entries are timed and strictly controlled. Bring sturdy hiking shoes and rain gear."
        },
        hi: {
            name: "माचू पिच्चू",
            history: "1450 के आसपास इंका सम्राट पचाकुती के लिए एक शाही संपत्ति के रूप में निर्मित। स्पेनिश विजय के दौरान इसे खाली कर दिया गया था और 1911 तक बाहरी दुनिया से छिपा रहा।",
            architecture: "क्लासिक इंका शैली में निर्मित, जिसमें ऐशलर चिनाई का उपयोग किया गया है। यहाँ बिना किसी गारे (मसाले) के ग्रेनाइट के पत्थरों को आपस में सटीक रूप से जोड़ा गया है।",
            cultural: "एक असाधारण धार्मिक अभयारण्य और कृषि केंद्र, जो इंका सभ्यता के गहरे खगोलीय संरेखण और प्रकृति के साथ उनके जुड़ाव को प्रदर्शित करता है।",
            facts: "यह समुद्र तल से 2,430 मीटर की ऊंचाई पर स्थित है। इस साइट की खोज 1911 में इतिहासकार हीराम बिंघम द्वारा अंतरराष्ट्रीय समुदाय के लिए की गई थी।",
            story: "धुंधले एंडीज पहाड़ों में ऊंचाई पर बसा माचू पिच्चू एक मौन अभयारण्य के रूप में खड़ा है, जो ब्रह्मांड के साथ सामंजस्य बिठाने वाले एक उन्नत साम्राज्य के रहस्यों को फुसफुसाता है।",
            tourism: "कुस्को से ट्रेन और बस की बुकिंग हफ्तों पहले करना आवश्यक है। पर्यटकों का प्रवेश सीमित समय के लिए होता है। चलने के लिए अच्छे जूते और बरसाती साथ लाएं।"
        }
    },
    pyramids: {
        confidence: 100,
        en: {
            name: "Pyramids of Giza",
            history: "Constructed during the Fourth Dynasty of the Old Kingdom (c. 2580–2560 BC) as monumental tombs for Pharaohs Khufu, Khafre, and Menkaure to secure their passage into the afterlife.",
            architecture: "Built from millions of heavy limestone blocks, demonstrating extraordinary geometry, engineering scale, and near-perfect alignment with cardinal directions.",
            cultural: "The oldest and only surviving monument of the original Seven Wonders of the Ancient World, standing as a testament to the divine hierarchy of ancient Egypt.",
            facts: "The Great Pyramid of Khufu was the tallest man-made structure in the world for over 3,800 years. Its original white casing stones reflected the desert sun like a mirror.",
            story: "Rising majestically from the golden desert sands, the Pyramids of Giza span millennia, guarding the eternal secrets of Pharaohs and the architectural marvels of the ancient world.",
            tourism: "Open daily. Avoid the midday heat. Hire official camels and horses from registered counters. Inside chamber access requires a separate ticket."
        },
        hi: {
            name: "गीज़ा के पिरामिड",
            history: "प्राचीन मिस्र के ओल्ड किंगडम (लगभग 2580-2560 ईसा पूर्व) के चौथे राजवंश के दौरान फिरौन खुफू, खफरे और मेनकाउरे के लिए विशाल मकबरे के रूप में निर्मित, ताकि उनका परलोक में गमन सुरक्षित हो सके।",
            architecture: "लाखों भारी चूना पत्थर के ब्लॉकों से निर्मित, जो असाधारण ज्यामिति, इंजीनियरिंग पैमाने और चारों मुख्य दिशाओं के साथ लगभग सटीक संरेखण प्रदर्शित करते हैं।",
            cultural: "प्राचीन दुनिया के मूल सात अजूबों में से सबसे पुराना और एकमात्र जीवित स्मारक, जो प्राचीन मिस्र के दिव्य पदानुक्रम और संस्कृति का प्रतीक है।",
            facts: "खुफू का महान पिरामिड 3,800 से अधिक वर्षों तक दुनिया की सबसे ऊंची मानव निर्मित संरचना थी। इसके मूल सफेद आवरण पत्थर मरुस्थलीय धूप को दर्पण की तरह परावर्तित करते थे।",
            story: "सुनहरी रेगिस्तानी रेत से भव्य रूप से उठते गीज़ा के पिरामिड सहस्राब्दियों पुराने हैं, जो फिरौन के शाश्वत रहस्यों और प्राचीन दुनिया के स्थापत्य चमत्कारों की रक्षा कर रहे हैं।",
            tourism: "प्रतिदिन खुला रहता है। दोपहर की गर्मी से बचें। केवल पंजीकृत काउंटरों से ही ऊंट और घोड़े किराए पर लें। आंतरिक कक्षों में जाने के लिए अलग टिकट की आवश्यकता होती है।"
        }
    },
    great_wall: {
        confidence: 100,
        en: {
            name: "Great Wall of China",
            history: "A colossal network of fortifications built across historical northern borders of China to defend against nomadic invasions. Construction spanned multiple dynasties starting in the 7th century BC.",
            architecture: "Constructed of stone, brick, tamped earth, and wood, stretching over 21,196 kilometers. Incorporates defensive watchtowers, troop barracks, and signaling stations.",
            cultural: "A monumental symbol of China's national defense, political unity, and historic resilience, reflecting centuries of engineering and physical labor.",
            facts: "It is not a single continuous wall, but a network of walls built by different dynasties. Sticky rice flour was used in the mortar for added durability.",
            story: "Winding like a giant stone dragon across mountains and ridges, the Great Wall of China tells a story of national unity, relentless defense, and human perseverance.",
            tourism: "Badaling is the easiest but very crowded. Mutianyu is recommended for scenic views and cable cars. Wear walking shoes for the steep, uneven steps."
        },
        hi: {
            name: "चीन की महान दीवार",
            history: "खानाबदोश आक्रमणों से रक्षा के लिए चीन की ऐतिहासिक उत्तरी सीमाओं पर बनाई गई किलेबंदी का एक विशाल नेटवर्क। इसका निर्माण 7वीं शताब्दी ईसा पूर्व से शुरू होकर कई राजवंशों के तहत किया गया।",
            architecture: "पत्थर, ईंट, मिट्टी और लकड़ी से निर्मित, जो 21,196 किलोमीटर से अधिक में फैली है। इसमें रक्षात्मक निगरानी टावर, सैन्य बैरक और संकेतक स्टेशन शामिल हैं।",
            cultural: "चीन की राष्ट्रीय रक्षा, राजनीतिक एकता और ऐतिहासिक लचीलेपन का एक विशाल प्रतीक, जो सदियों की इंजीनियरिंग और शारीरिक श्रम को दर्शाता है।",
            facts: "यह कोई एक निरंतर दीवार नहीं है, बल्कि विभिन्न राजवंशों द्वारा निर्मित दीवारों का नेटवर्क है। अतिरिक्त मजबूती के लिए गारे में चिपकने वाले चावल के आटे का उपयोग किया गया था।",
            story: "पहाड़ों और पहाड़ियों पर एक विशाल पत्थर के ड्रैगन की तरह लहराती चीन की महान दीवार राष्ट्रीय एकता, अथक सुरक्षा और मानवीय दृढ़ता की कहानी कहती है।",
            tourism: "बाडालिंग पहुंचना सबसे आसान है लेकिन वहां बहुत भीड़ होती है। दर्शनीय दृश्यों और केबल कारों के लिए मुतियानयु की सिफारिश की जाती है। खड़ी और असमान सीढ़ियों के लिए चलने वाले जूते पहनें।"
        }
    },
    eiffel_tower: {
        confidence: 100,
        en: {
            name: "Eiffel Tower",
            history: "Built by Gustave Eiffel's engineering company for the 1889 World's Fair (Exposition Universelle) to celebrate the centennial of the French Revolution. Initially met with resistance from Paris artists.",
            architecture: "Constructed of puddle iron, a lattice-like structure that showcases the pinnacle of 19th-century structural iron engineering. Stands 330 meters tall.",
            cultural: "The ultimate cultural icon of France and Paris, symbolizing industrial progress, artistic audacity, and modern architectural elegance.",
            facts: "It can grow up to 15 centimeters taller during the summer due to thermal expansion of the iron structure. It is repainted by hand every 7 years.",
            story: "Rising into the Parisian sky, the Eiffel Tower transforms iron into lace, representing a monument of engineering and a beacon of romantic modernism.",
            tourism: "Book lift tickets online weeks in advance. Night visits feature a spectacular sparkling light show every hour. Climbing the stairs to the second floor is cheaper and has less queue."
        },
        hi: {
            name: "एफिल टॉवर",
            history: "फ्रांसीसी क्रांति की शताब्दी मनाने के लिए 1889 के विश्व मेले (एक्सपोजीशन यूनिवर्सेल) के लिए गुस्ताव एफिल की इंजीनियरिंग कंपनी द्वारा निर्मित। शुरू में पेरिस के कलाकारों द्वारा इसका विरोध किया गया था।",
            architecture: "गढ़े लोहे (पडल आयरन) से निर्मित, एक जालीदार संरचना जो 19वीं सदी की लोहे की इंजीनियरिंग के शिखर को दर्शाती है। इसकी कुल ऊंचाई 330 मीटर है।",
            cultural: "फ्रांस और पेरिस का परम सांस्कृतिक प्रतीक, जो औद्योगिक प्रगति, कलात्मक साहस और आधुनिक स्थापत्य लालित्य का प्रतिनिधित्व करता है।",
            facts: "लोहे के तापीय विस्तार (थर्मल एक्सपेंशन) के कारण गर्मियों के दौरान यह टावर 15 सेंटीमीटर तक लंबा हो सकता है। इसे हर 7 साल में हाथ से दोबारा रंगा जाता है।",
            story: "पेरिस के आसमान में उठती यह मीनार लोहे को कला में बदल देती है, जो इंजीनियरिंग के एक महान स्मारक और रोमांटिक आधुनिकता के प्रतीक के रूप में खड़ी है।",
            tourism: "लिफ्ट के टिकट हफ़्तों पहले बुक करें। रात की यात्रा में हर घंटे एक शानदार टिमटिमाती रोशनी का शो होता है। दूसरी मंजिल तक सीढ़ियों से चढ़ना सस्ता है और इसमें कम कतार होती है।"
        }
    }
};

// 2. State Variables
let currentMonumentKey = "taj_mahal";
let currentLanguage = "en";
let isScanning = false;
let speechUtterance = null;
const activeSpeechSynth = window.speechSynthesis;
let loadedImageBase64 = null; // Stores currently uploaded custom image

// Preset background image gradient/color placeholders for UI
const monumentColors = {
    taj_mahal: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    colosseum: "linear-gradient(135deg, #d4a373 0%, #faedcd 100%)",
    machu_picchu: "linear-gradient(135deg, #80b918 0%, #55a630 100%)",
    pyramids: "linear-gradient(135deg, #fcd0a1 0%, #d39e82 100%)",
    great_wall: "linear-gradient(135deg, #606c38 0%, #283618 100%)",
    eiffel_tower: "linear-gradient(135deg, #a8dadc 0%, #457b9d 100%)"
};

// 3. Document Elements
document.addEventListener("DOMContentLoaded", () => {
    // Initialize Lucide Icons
    lucide.createIcons();
    
    // Core Dashboard Elements
    const presetButtons = document.querySelectorAll(".preset-btn");
    const displayTitle = document.getElementById("display-title");
    const displayConfidence = document.getElementById("display-confidence");
    const displayHistory = document.getElementById("display-history");
    const displayArchitecture = document.getElementById("display-architecture");
    const displayCultural = document.getElementById("display-cultural");
    const displayFacts = document.getElementById("display-facts");
    const displayStory = document.getElementById("display-story");
    const displayTourism = document.getElementById("display-tourism");
    
    // Scan Interface
    const uploadZone = document.getElementById("upload-zone");
    const fileInput = document.getElementById("file-input");
    const uploadContentDefault = document.getElementById("upload-content-default");
    const imagePreviewContainer = document.getElementById("image-preview-container");
    const selectedImageView = document.getElementById("selected-image-view");
    const laserLine = document.getElementById("laser-line");
    const scanTriggerBtn = document.getElementById("scan-trigger-btn");
    const consoleLogs = document.getElementById("console-logs");
    const statusIndicator = document.querySelector(".status-indicator");
    
    // Controls
    const bookmarkToggleBtn = document.getElementById("bookmark-toggle-btn");
    const clearHistoryBtn = document.getElementById("clear-history-btn");
    const historyContainer = document.getElementById("history-items-container");
    const langEnBtn = document.getElementById("lang-en");
    const langHiBtn = document.getElementById("lang-hi");
    
    // Audio controls
    const audioPlayBtn = document.getElementById("audio-play-btn");
    const audioPauseBtn = document.getElementById("audio-pause-btn");
    const audioStopBtn = document.getElementById("audio-stop-btn");
    const audioWave = document.getElementById("audio-wave");
    
    // Roadmap
    const roadmapTabs = document.querySelectorAll(".roadmap-tab");
    const roadmapPanels = document.querySelectorAll(".roadmap-panel");
    
    // Mobile Drawer
    const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
    const mobileDrawer = document.querySelector(".mobile-drawer");
    const mobileDrawerClose = document.querySelector(".mobile-drawer-close");
    const drawerLinks = document.querySelectorAll(".drawer-link");

    // Initialize custom scanned monuments from localStorage first, then bookmarks
    loadCustomMonumentsFromCache();
    renderBookmarks();

    // Set initial display
    updateDashboardUI();
    addConsoleLog("System ready. Select a monument or upload a scan.", "system");

    // 4. Preset Monument Selector
    presetButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            if (isScanning) return;
            
            // Stop speech if running
            stopAudioNarration();

            presetButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            const monumentKey = btn.getAttribute("data-monument");
            currentMonumentKey = monumentKey;
            loadedImageBase64 = null; // Clear custom scan pointer
            
            // Set image preview container to a styled gradient block representing preset selection
            uploadContentDefault.classList.remove("hidden");
            imagePreviewContainer.classList.add("hidden");
            selectedImageView.src = "";
            selectedImageView.style.display = "none";
            
            addConsoleLog(`Preset selected: ${monumentDatabase[monumentKey].en.name}. Loading cache...`, "system");
            
            updateDashboardUI();
        });
    });

    // 5. File Upload Mechanics
    uploadZone.addEventListener("click", (e) => {
        if (isScanning) return;
        if (e.target !== fileInput) {
            fileInput.click();
        }
    });

    fileInput.addEventListener("change", (e) => {
        if (e.target.files && e.target.files[0]) {
            handleUploadedFile(e.target.files[0]);
        }
    });

    // Drag and drop event listeners
    uploadZone.addEventListener("dragover", (e) => {
        e.preventDefault();
        if (isScanning) return;
        uploadZone.classList.add("drag-active");
    });

    uploadZone.addEventListener("dragleave", () => {
        uploadZone.classList.remove("drag-active");
    });

    uploadZone.addEventListener("drop", (e) => {
        e.preventDefault();
        uploadZone.classList.remove("drag-active");
        if (isScanning) return;
        
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleUploadedFile(e.dataTransfer.files[0]);
        }
    });

    function handleUploadedFile(file) {
        if (!file.type.match("image.*")) {
            addConsoleLog("Error: Selected file must be an image.", "working");
            return;
        }
        
        const reader = new FileReader();
        reader.onload = function(event) {
            // Display preview image
            selectedImageView.src = event.target.result;
            selectedImageView.style.display = "block";
            imagePreviewContainer.style.background = "none";
            
            uploadContentDefault.classList.add("hidden");
            imagePreviewContainer.classList.remove("hidden");
            
            // Store base64 data URL
            loadedImageBase64 = event.target.result;
            
            addConsoleLog(`Loaded file: ${file.name} (${Math.round(file.size / 1024)} KB)`, "system");
            addConsoleLog(`Ready to scan. Click 'Scan Monument' to query Gemini Vision API.`, "working");
        };
        reader.readAsDataURL(file);
    }

    // 6. Scan Simulation & Real API Trigger
    scanTriggerBtn.addEventListener("click", () => {
        if (isScanning) return;
        stopAudioNarration();
        
        if (loadedImageBase64) {
            // Trigger actual Gemini backend scan
            runGeminiVisionScan();
        } else {
            // Fallback simulation mode using a random preset
            addConsoleLog("No custom image uploaded. Initiating mock scanning simulation...", "system");
            startScanningSequence(true);
        }
    });

    // Run active Gemini Vision scan through express backend
    async function runGeminiVisionScan() {
        isScanning = true;
        scanTriggerBtn.disabled = true;
        scanTriggerBtn.innerHTML = `<i data-lucide="loader-2" class="animate-spin"></i> Analyzing...`;
        lucide.createIcons();
        
        statusIndicator.textContent = "Scanning";
        statusIndicator.className = "status-indicator scanning";
        laserLine.classList.add("active");
        
        addConsoleLog("Uploading image to Gemini Vision API...", "working");

        // UI logs ticker
        const logTimers = [];
        const tickerLogs = [
            "Contacting backend proxy server...",
            "Encrypting payload and preparing prompt context...",
            "Interfacing with Gemini 1.5 Flash Vision Models...",
            "Analyzing image features and recognizing coordinates...",
            "Matching database entries against historical landmarks..."
        ];

        tickerLogs.forEach((log, index) => {
            const timer = setTimeout(() => {
                addConsoleLog(log, "working");
            }, 400 * (index + 1));
            logTimers.push(timer);
        });

        try {
            const response = await fetch("https://heritagelens-ai-9hpk.onrender.com/api/scan", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ image: loadedImageBase64 })
            });

            // Clear visual ticker timers
            logTimers.forEach(clearTimeout);

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || `API HTTP ${response.status}`);
            }

            const scanResult = await response.json();
            
            // Create a unique key for the scanned monument and store it in database
            const uniqueKey = "scan_" + Date.now();
            monumentDatabase[uniqueKey] = scanResult;
            currentMonumentKey = uniqueKey;

            // Save scanned details to local storage so they are persistent
            saveCustomMonumentToCache(uniqueKey, scanResult);

            // Remove active presets styling
            presetButtons.forEach(b => b.classList.remove("active"));

            // End Scan State
            isScanning = false;
            scanTriggerBtn.disabled = false;
            scanTriggerBtn.innerHTML = `<i data-lucide="sparkles"></i> Scan Monument`;
            
            statusIndicator.textContent = "Ready";
            statusIndicator.className = "status-indicator live";
            laserLine.classList.remove("active");
            
            updateDashboardUI();
            addConsoleLog(`Gemini match: ${scanResult[currentLanguage].name} (${scanResult.confidence}% confidence score)`, "success");
            
        } catch (err) {
            logTimers.forEach(clearTimeout);
            console.error("Gemini Scan Error:", err);
            
            addConsoleLog(`Scan error: ${err.message}`, "system");
            addConsoleLog("Backend offline or API key not set. Triggering fallback simulation...", "working");
            
            setTimeout(() => {
                isScanning = false;
                scanTriggerBtn.disabled = false;
                scanTriggerBtn.innerHTML = `<i data-lucide="sparkles"></i> Scan Monument`;
                
                statusIndicator.textContent = "Ready";
                statusIndicator.className = "status-indicator live";
                laserLine.classList.remove("active");
                
                triggerFallbackSimulation();
            }, 1000);
        }
        lucide.createIcons();
    }

    function startScanningSequence(isMock = false) {
        isScanning = true;
        scanTriggerBtn.disabled = true;
        scanTriggerBtn.innerHTML = `<i data-lucide="loader-2" class="animate-spin"></i> Analyzing...`;
        lucide.createIcons();
        
        statusIndicator.textContent = "Scanning";
        statusIndicator.className = "status-indicator scanning";
        laserLine.classList.add("active");
        
        addConsoleLog("Initializing computer vision network...", "working");

        const stages = [
            { delay: 400, text: "Extracting visual tensor matrices...", type: "working" },
            { delay: 800, text: "Matching structural architecture vectors...", type: "working" },
            { delay: 1200, text: "Querying Global Cultural Heritage Graph...", type: "working" },
            { delay: 1700, text: "Analyzing architectural styles and period history...", type: "working" },
            { delay: 2000, text: "Match identified successfully! Rendering details...", type: "success" }
        ];

        stages.forEach((stage) => {
            setTimeout(() => {
                addConsoleLog(stage.text, stage.type);
            }, stage.delay);
        });

        setTimeout(() => {
            isScanning = false;
            scanTriggerBtn.disabled = false;
            scanTriggerBtn.innerHTML = `<i data-lucide="sparkles"></i> Scan Monument`;
            
            statusIndicator.textContent = "Ready";
            statusIndicator.className = "status-indicator live";
            laserLine.classList.remove("active");
            
            triggerFallbackSimulation();
        }, 2200);
    }

    // Fallback trigger
    function triggerFallbackSimulation() {
        const presetKeys = Object.keys(monumentDatabase).filter(k => !k.startsWith("scan_"));
        const fallbackKey = presetKeys[Math.floor(Math.random() * presetKeys.length)];
        currentMonumentKey = fallbackKey;
        
        // Highlight corresponding preset button
        presetButtons.forEach(btn => {
            if (btn.getAttribute("data-monument") === fallbackKey) {
                btn.classList.add("active");
            } else {
                btn.classList.remove("active");
            }
        });
        
        // Render styled preset placeholder
        uploadContentDefault.classList.remove("hidden");
        imagePreviewContainer.classList.add("hidden");
        selectedImageView.src = "";
        selectedImageView.style.display = "none";
        
        updateDashboardUI();
        addConsoleLog(`[Notice] Rendered local simulation mockup: ${monumentDatabase[fallbackKey][currentLanguage].name}`, "success");
        lucide.createIcons();
    }

    // Console Logging utility
    function addConsoleLog(message, type = "system") {
        const line = document.createElement("div");
        line.className = `log-line ${type}`;
        const now = new Date();
        const timeStr = now.toTimeString().split(" ")[0];
        
        line.innerHTML = `<span style="opacity: 0.5;">[${timeStr}]</span> ${message}`;
        consoleLogs.appendChild(line);
        consoleLogs.scrollTop = consoleLogs.scrollHeight;
    }

    // 7. Update UI Content
    function updateDashboardUI() {
        const entry = monumentDatabase[currentMonumentKey];
        if (!entry) return;
        
        const data = entry[currentLanguage];
        displayTitle.textContent = data.name;
        displayHistory.textContent = data.history;
        displayArchitecture.textContent = data.architecture;
        displayCultural.textContent = data.cultural;
        displayFacts.textContent = data.facts;
        displayStory.textContent = data.story;
        displayTourism.textContent = data.tourism || (currentLanguage === "hi" ? "सैर-सपाटा विवरण अनुपलब्ध है।" : "Tourism relevance tips currently unavailable.");
        
        // Handle confidence badge display
        const confidenceVal = entry.confidence || 100;
        displayConfidence.textContent = `${confidenceVal}% Match`;
        
        // Change badge color depending on confidence score
        if (confidenceVal >= 90) {
            displayConfidence.style.backgroundColor = "rgba(20, 180, 90, 0.12)";
            displayConfidence.style.color = "var(--accent-emerald)";
            displayConfidence.style.borderColor = "rgba(20, 180, 90, 0.3)";
        } else if (confidenceVal >= 70) {
            displayConfidence.style.backgroundColor = "rgba(229, 169, 26, 0.12)";
            displayConfidence.style.color = "var(--primary-gold)";
            displayConfidence.style.borderColor = "rgba(229, 169, 26, 0.3)";
        } else {
            displayConfidence.style.backgroundColor = "rgba(220, 50, 50, 0.12)";
            displayConfidence.style.color = "var(--color-error)";
            displayConfidence.style.borderColor = "rgba(220, 50, 50, 0.3)";
        }

        // Check if monument is bookmarked
        const bookmarks = getBookmarks();
        if (bookmarks.includes(currentMonumentKey)) {
            bookmarkToggleBtn.classList.add("active");
        } else {
            bookmarkToggleBtn.classList.remove("active");
        }
    }

    // 8. Language Toggle (English/Hindi)
    langEnBtn.addEventListener("click", () => {
        if (currentLanguage === "en") return;
        stopAudioNarration();

        currentLanguage = "en";
        langHiBtn.classList.remove("active");
        langEnBtn.classList.add("active");
        
        updateDashboardUI();
        renderBookmarks(); // Refresh bookmark chip labels to English
        addConsoleLog("Language profile toggled: English", "system");
    });

    langHiBtn.addEventListener("click", () => {
        if (currentLanguage === "hi") return;
        stopAudioNarration();

        currentLanguage = "hi";
        langEnBtn.classList.remove("active");
        langHiBtn.classList.add("active");
        
        updateDashboardUI();
        renderBookmarks(); // Refresh bookmark chip labels to Hindi
        addConsoleLog("भाषा बदली गई: हिन्दी", "system");
    });

    // 9. Bookmarks & Local Storage History
    bookmarkToggleBtn.addEventListener("click", () => {
        let bookmarks = getBookmarks();
        
        if (bookmarks.includes(currentMonumentKey)) {
            bookmarks = bookmarks.filter(key => key !== currentMonumentKey);
            bookmarkToggleBtn.classList.remove("active");
            addConsoleLog(`Removed ${monumentDatabase[currentMonumentKey][currentLanguage].name} from saved scans.`, "system");
        } else {
            bookmarks.push(currentMonumentKey);
            bookmarkToggleBtn.classList.add("active");
            addConsoleLog(`Saved ${monumentDatabase[currentMonumentKey][currentLanguage].name} to scans history.`, "success");
        }
        
        saveBookmarks(bookmarks);
        renderBookmarks();
    });

    clearHistoryBtn.addEventListener("click", () => {
        const bookmarks = getBookmarks();
        
        // Remove custom scan entries from cache if they are in history
        bookmarks.forEach(key => {
            if (key.startsWith("scan_")) {
                deleteCustomMonumentFromCache(key);
            }
        });
        
        saveBookmarks([]);
        renderBookmarks();
        bookmarkToggleBtn.classList.remove("active");
        addConsoleLog("Saved scans history cleared.", "system");
    });

    function getBookmarks() {
        try {
            const raw = localStorage.getItem("heritagelens_scans");
            return raw ? JSON.parse(raw) : [];
        } catch(e) {
            return [];
        }
    }

    function saveBookmarks(arr) {
        try {
            localStorage.setItem("heritagelens_scans", JSON.stringify(arr));
        } catch(e) {
            console.error("Failed to write to localStorage", e);
        }
    }

    // LocalStorage Scanned Monument Caching logic
    function getCustomMonumentsFromCache() {
        try {
            const raw = localStorage.getItem("heritagelens_custom_data");
            return raw ? JSON.parse(raw) : {};
        } catch(e) {
            return {};
        }
    }

    function saveCustomMonumentToCache(key, data) {
        try {
            const cache = getCustomMonumentsFromCache();
            cache[key] = data;
            localStorage.setItem("heritagelens_custom_data", JSON.stringify(cache));
        } catch(e) {
            console.error("Failed to write custom scans to cache", e);
        }
    }

    function deleteCustomMonumentFromCache(key) {
        try {
            const cache = getCustomMonumentsFromCache();
            delete cache[key];
            localStorage.setItem("heritagelens_custom_data", JSON.stringify(cache));
            // Also delete in-memory database entry
            delete monumentDatabase[key];
        } catch(e) {
            console.error("Failed to delete custom scan from cache", e);
        }
    }

    function loadCustomMonumentsFromCache() {
        const cache = getCustomMonumentsFromCache();
        Object.assign(monumentDatabase, cache);
    }

    function renderBookmarks() {
        const bookmarks = getBookmarks();
        historyContainer.innerHTML = "";
        
        if (bookmarks.length === 0) {
            historyContainer.innerHTML = `<span class="no-history-text">No saved scans yet. Bookmark a scan to save it!</span>`;
            return;
        }

        bookmarks.forEach(key => {
            const entry = monumentDatabase[key];
            if (!entry) return; // Safeguard if database key missing

            const chip = document.createElement("div");
            chip.className = "history-chip";
            chip.style.cursor = "pointer";
            
            const chipText = document.createElement("span");
            chipText.textContent = entry[currentLanguage].name;
            chipText.addEventListener("click", () => {
                if (isScanning) return;
                stopAudioNarration();
                currentMonumentKey = key;
                
                // Set preset button active or inactive
                presetButtons.forEach(b => {
                    if (b.getAttribute("data-monument") === key) {
                        b.classList.add("active");
                    } else {
                        b.classList.remove("active");
                    }
                });
                
                // Clear custom loaded image representation
                loadedImageBase64 = null;
                uploadContentDefault.classList.remove("hidden");
                imagePreviewContainer.classList.add("hidden");
                selectedImageView.src = "";
                selectedImageView.style.display = "none";
                
                updateDashboardUI();
                addConsoleLog(`Loaded bookmark: ${entry[currentLanguage].name}`, "system");
            });

            // Delete chip button
            const delBtn = document.createElement("button");
            delBtn.className = "history-chip-del";
            delBtn.innerHTML = `<i data-lucide="x"></i>`;
            delBtn.title = "Delete bookmark";
            delBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                let currBookmarks = getBookmarks();
                currBookmarks = currBookmarks.filter(k => k !== key);
                saveBookmarks(currBookmarks);
                
                if (key.startsWith("scan_")) {
                    deleteCustomMonumentFromCache(key);
                }
                
                renderBookmarks();
                
                if (key === currentMonumentKey) {
                    bookmarkToggleBtn.classList.remove("active");
                }
                addConsoleLog(`Deleted bookmark: ${entry[currentLanguage].name}`, "system");
                lucide.createIcons();
            });

            chip.appendChild(chipText);
            chip.appendChild(delBtn);
            historyContainer.appendChild(chip);
        });
        
        lucide.createIcons();
    }

    // 10. Web Speech API Text-to-Speech (TTS) Story Narration
    audioPlayBtn.addEventListener("click", () => {
        const textToRead = displayStory.textContent;
        
        if (activeSpeechSynth.speaking) {
            activeSpeechSynth.cancel();
        }

        speechUtterance = new SpeechSynthesisUtterance(textToRead);
        
        if (currentLanguage === "hi") {
            speechUtterance.lang = "hi-IN";
            speechUtterance.rate = 0.95;
        } else {
            speechUtterance.lang = "en-US";
            speechUtterance.rate = 1.0;
        }
        
        speechUtterance.onstart = () => {
            audioPlayBtn.classList.add("hidden");
            audioPauseBtn.classList.remove("hidden");
            audioStopBtn.classList.remove("hidden");
            audioWave.classList.remove("hidden");
            addConsoleLog("Narrator speech synthesis online.", "system");
        };

        speechUtterance.onend = () => {
            resetAudioControls();
            addConsoleLog("Speech narration completed.", "system");
        };

        speechUtterance.onerror = (e) => {
            console.error("TTS synthesis error:", e);
            resetAudioControls();
        };

        activeSpeechSynth.speak(speechUtterance);
    });

    audioPauseBtn.addEventListener("click", () => {
        if (activeSpeechSynth.speaking && !activeSpeechSynth.paused) {
            activeSpeechSynth.pause();
            audioPauseBtn.classList.add("hidden");
            audioPlayBtn.classList.remove("hidden");
            audioPlayBtn.querySelector(".audio-btn-text").textContent = "Resume";
            audioPlayBtn.querySelector("i").setAttribute("data-lucide", "play");
            audioWave.style.opacity = "0.3";
            addConsoleLog("Narration paused.", "system");
            lucide.createIcons();
        } else if (activeSpeechSynth.paused) {
            activeSpeechSynth.resume();
            audioPlayBtn.classList.add("hidden");
            audioPauseBtn.classList.remove("hidden");
            audioWave.style.opacity = "1";
            addConsoleLog("Narration resumed.", "system");
        }
    });

    audioStopBtn.addEventListener("click", () => {
        stopAudioNarration();
    });

    function stopAudioNarration() {
        if (activeSpeechSynth.speaking || activeSpeechSynth.paused) {
            activeSpeechSynth.cancel();
            resetAudioControls();
            addConsoleLog("Narration stopped.", "system");
        }
    }

    function resetAudioControls() {
        audioPlayBtn.classList.remove("hidden");
        audioPlayBtn.querySelector(".audio-btn-text").textContent = "Listen";
        audioPlayBtn.querySelector("i").setAttribute("data-lucide", "play");
        audioPauseBtn.classList.add("hidden");
        audioStopBtn.classList.add("hidden");
        audioWave.classList.add("hidden");
        audioWave.style.opacity = "1";
        lucide.createIcons();
    }

    // 11. Roadmap Timeline Phase Tab Toggler
    roadmapTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            roadmapTabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            
            const phaseKey = tab.getAttribute("data-phase");
            roadmapPanels.forEach(panel => {
                if (panel.id === `${phaseKey}-panel`) {
                    panel.classList.add("active");
                } else {
                    panel.classList.remove("active");
                }
            });
        });
    });

    // 12. Mobile Menu Navigation Drawer Actions
    mobileMenuToggle.addEventListener("click", () => {
        mobileDrawer.classList.add("open");
    });

    mobileDrawerClose.addEventListener("click", () => {
        mobileDrawer.classList.remove("open");
    });

    drawerLinks.forEach(link => {
        link.addEventListener("click", () => {
            mobileDrawer.classList.remove("open");
        });
    });
});
