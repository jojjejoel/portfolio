var PORTFOLIO = {

  heroYoutubeId: "cqgWBGhnobQ",
  heroVideoCaption: "Game Audio Showreel",

  social: {
    email: "joelalexanderschultz@gmail.com",
    linkedin: "https://www.linkedin.com/in/joel-schultz/",
    github: "https://github.com/jojjejoel",
    spotify: "https://open.spotify.com/artist/7aeVrxZpgU4FgGgLJwX4q1?si=K9_EHYX8Rs2wYEqlzSAhww"
  },

  about: {
    photo: "assets/joel-dog.jpg",
    resumeUrl: "assets/Joel_Schultz_CV.pdf",
    paragraphs: [
      "I’m Joel Schultz, an audio programmer with a focus on real-time audio systems, tools, and sound design for games.",
      "Most recently at <a href=\"https://resolutiongames.com\" target=\"_blank\" rel=\"noopener\" class=\"accent-link\">Resolution Games</a>, I developed and maintained audio systems, tools, and workflows using Wwise, FMOD, and C#, with a C++ background from my game programming education. My focus is on middleware integration, gameplay-driven audio behavior, and production-ready implementation. I built audio tools and pipelines that scale across multiple projects and support designers with fast iteration and clear workflows.",
      "I have worked on adaptive voice over systems, gameplay reactive music, event based sound effects, and audio driven haptics. I work closely with sound designers and programmers to make sure audio systems are reliable, flexible, and work well within real production constraints.",
      "Outside of game development, I write and record music as an independent country and Americana artist, which influences how I think about tone, atmosphere, and musicality in interactive sound.",
      "<strong>Open to full time roles and contract work.</strong>"
    ]
  },

  shippedGames: [
    {
      id: "battlemarked",
      title: "Demeo x Dungeons &amp; Dragons: Battlemarked",
      tech: "Unity, C#, FMOD • Meta Quest, PC &amp; PS5 (VR and flatscreen)",
      paragraphs: [
        "I worked on audio systems and tools, focusing on scalable solutions for the game’s VO and abilities. My work includes:"
      ],
      bullets: [
        "Developing tools that help sound designers implement and refine audio efficiently.",
        "Building scalable systems to manage large volumes of voice-over and ability sounds dynamically.",
        "Designing and refining how VO is triggered, prioritized, and mixed in-game, including hands-on editing of VO assets when needed.",
        "Contributing to sound design where needed to support and validate audio systems."
      ],
      youtubeId: "Ot-xBspDo3U",
      detailPage: "pages/battlemarked.html",
      detailLabel: "Read about VO Tools"
    },
    {
      id: "spatial-ops",
      title: "Spatial Ops",
      tech: "Unity, C#, Wwise • Meta Quest, Pico",
      paragraphs: [
        "I developed core audio systems for Spatial Ops, focusing on scalable weapon logic, VO behavior, and real-time audio effects. My work includes:"
      ],
      bullets: [
        "Layered weapon-audio systems (spin, windup, firing, overheat) and perspective-dependent 1P/3P variants.",
        "VO bark logic with per-spawn voice assignment and probability-controlled triggering.",
        "DSP features such as bullet-time pitch reduction and explosion tinnitus/muffle states.",
        "RTPC-based systems like drone motor speed modulation.",
        "Occasionally contributing to sound design when needed."
      ],
      youtubeId: "VaTNCZMe1oE"
    },
    {
      id: "racket-club",
      title: "Racket Club",
      tech: "Unity, C#, Wwise • Meta Quest, Steam, Pico",
      paragraphs: [
        "I worked as an audio programmer on this game; implementing audio features connected to physics, dynamic music, voice chat. One feature I’m especially proud of is how the racket “whooshes” as you swing it through the air."
      ],
      bullets: [],
      youtubeId: "OMtUn_7GzFI",
      compact: true,
      compactLine: "Physics-driven audio, dynamic music, voice chat, and a racket that whooshes as you swing it"
    },
    {
      id: "home-sports",
      title: "Home Sports",
      tech: "Unity, C#, Wwise • Meta Quest",
      paragraphs: [
        "I’ve implemented dynamic and immersive audio systems for games such as pickleball, hockey, bowling, mini golf, and badminton, enhancing the social and competitive experience."
      ],
      bullets: [],
      youtubeId: "vEIJhNWjwi0",
      compact: true,
      compactLine: "Audio systems across pickleball, hockey, bowling, mini golf, and badminton"
    },
    {
      id: "gears-goo",
      title: "Gears &amp; Goo",
      tech: "Unity, C#, Wwise • Apple Vision Pro",
      paragraphs: [
        "Contributed to the early audio integration work on Gears &amp; Goo (Apple Vision Pro), supporting Wwise setup, foundational audio-system implementation, and initial VO/dialogue-pipeline tasks."
      ],
      bullets: [],
      youtubeId: "4FnuU17T3I4",
      compact: true,
      compactLine: "Early Wwise setup, foundational audio systems, and initial VO pipeline work"
    }
  ],

  soundRedesigns: [
    {
      id: "arc-raiders",
      title: "ARC Raiders",
      paragraphs: [
        "Focus on environmental realism and spatial grounding: outdoor ambience, reverb behavior, distance, and world placement. Player movement and actions are designed to feel physically believable and consistent with a real outdoor acoustic space.",
        "Threatening elements are shaped through motion, weight, and mechanical detail, prioritizing grounded realism over exaggerated sci-fi treatment.",
        "Non-commercial portfolio work. All original audio replaced.",
        "ARC Raiders is developed by Embark Studios."
      ],
      bullets: [],
      youtubeId: "bOroEEPFrIw"
    },
    {
      id: "corepunk",
      title: "Corepunk",
      paragraphs: [
        "Focus on readability and systemic clarity in a top-down MMO context. Emphasis on ability feedback, combat timing, and spatial separation between characters, enemies, and the environment.",
        "Sound design prioritizes clear player feedback and controlled density during combat, supporting long play sessions without fatigue.",
        "Non-commercial portfolio work. All original audio replaced.",
        "Corepunk is developed by Artificial Core."
      ],
      bullets: [],
      youtubeId: "bHVg0fmM8f4"
    }
  ],

  personalProjects: [
    {
      id: "diffraction-ray-tracer",
      title: "Real-Time Audio Diffraction Ray Tracer",
      tech: "Unreal Engine 5, C++, MetaSound",
      paragraphs: [
        "Rays detect geometric edges and cast onward from them as diffraction waypoints, placing a virtual source where the sound actually arrives from rather than just attenuating it. The challenge was keeping it real-time viable."
      ],
      bullets: [
        "Works with any geometry at runtime, no portals or precomputed rooms",
        "Async ray casts spread across frames to limit per-frame cost",
        "Persistent edge cache so known diffraction points are not re-found",
        "String pulling so muffling reflects the true path length",
        "Lowpass on the occluded source, highpass and reverb from path length"
      ],
      youtubeId: "FY_Q5QJGMjQ"
    },
    {
      id: "npc-voice-acoustics",
      title: "NPC Voice Driven by Acoustic Simulation",
      tech: "Unreal Engine 5, C++, MetaSound • Python, Chatterbox",
      paragraphs: [
        "Vocal effort follows the acoustic state of the diffraction ray tracer above: how far the sound really has to travel, not the straight line distance. A player two steps away behind a wall is treated as far off. The tricky part was that a far shout and a close whisper land at similar loudness, so the contrast has to come from timbre rather than level."
      ],
      bullets: [
        "Lines keyed to context: behind a wall, a corner, out of sight",
        "Barge-in interrupts mid-sentence when line of sight breaks",
        "Runs through the same diffraction pipeline as any other sound",
        "Voice cloned from my own recordings, one render per effort level",
        "Scheduling logic is pure functions, covered by unit tests"
      ],
      youtubeId: "0SEGsmSWudY"
    },
    {
      id: "joel-sings",
      title: "Joel Sings",
      tech: "Unity, C#, Wwise",
      paragraphs: [
        "An interactive music performance demo inspired by Alan Wake II’s “We Sing” scene."
      ],
      bullets: [
        "Voice-synced lighting &amp; video",
        "Spatialized vocals using Wwise",
        "Audio-controlled visual effects"
      ],
      youtubeId: "Qv9CIEx3MI8",
      downloadUrl: "https://drive.google.com/file/d/1ZuZ_o-XyZhyeY3mHguCfroVXE7JT2Jsq/view?usp=sharing"
    },
    {
      id: "sound-playground",
      hidden: true,
      title: "Sound Playground",
      paragraphs: [
        "An experimental audio sandbox built with Wwise C++ API integration."
      ],
      bullets: [
        "Wwise Spatial Audio",
        "Visuals synced to music",
        "Adjustable playback speed of music",
        "Car engine SFX"
      ],
      youtubeId: null,
      detailPage: "pages/sound-playground.html",
      detailLabel: "Read more"
    },
    {
      id: "theremin-hero",
      hidden: true,
      title: "Theremin Hero",
      paragraphs: [
        "Created during a game jam, this VR project is an experimental musical experience where players control pitch, volume, and vibrato using only hand tracking. Inspired by the theremin, it transforms intuitive gestures into expressive sound, creating a virtual instrument you can play. Developed in Unity with Wwise, the project let me explore the intersection of musicality and real-time audio programming within a tight jam setting."
      ],
      bullets: [],
      youtubeId: null
    },
    {
      id: "birkenrock",
      title: "BirkenRock",
      paragraphs: [
        "For this game jam project, I created a mixed reality dance game where the player uses Meta Quest Pro controllers strapped to their slippers to track foot movements. The gameplay is inspired by Dance Dance Revolution, with colored squares moving in front of the player. The objective is to step on the corresponding footplates when the squares reach the center. This project focused on motion tracking and interactive gameplay to create a fun and engaging experience."
      ],
      bullets: [],
      youtubeId: "bTk4pghIjOY"
    }
  ]

};
