var APP_DATA = {
  "scenes": [
    {
      "id": "0-meeting-point",
      "name": "MEETING POINT",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.10329499654659102,
        "pitch": 0.050885220157113054,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 0.5031859770067051,
          "pitch": 0.0848713585243388,
          "rotation": 0,
          "target": "1-view-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-view-1",
      "name": "VIEW 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.35084679861519064,
        "pitch": -0.01780982705499312,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -1.9989469580400936,
          "pitch": 0.245189835279902,
          "rotation": 0,
          "target": "2-view-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-view-2",
      "name": "VIEW 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.7319697169078374,
        "pitch": -0.09159339628281415,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -2.2157784646793317,
          "pitch": 0.12623428451722063,
          "rotation": 0,
          "target": "3-bosleigh"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bosleigh",
      "name": "BOSLEIGH",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.5966176524674598,
        "pitch": -0.2875014938876923,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 1.3158421368838713,
          "pitch": -0.11096781197608507,
          "rotation": 0,
          "target": "0-meeting-point"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
