// Key constants
const K_FORWARD = "W".charCodeAt(0);
const K_BACKWARD = "S".charCodeAt(0);
const K_STRAFE_LEFT = "A".charCodeAt(0);
const K_STRAFE_RIGHT = "D".charCodeAt(0);

const btnForward = document.getElementById("btnForward");
const btnBackward = document.getElementById("btnBackward");
const btnStrafeLeft = document.getElementById("btnStrafeLeft");
const btnStrafeRight = document.getElementById("btnStrafeRight");

let isButtonHeld = false;
let isBackwardButtonHeld = false;
let isStrafeLeftButtonHeld = false;
let isStrafeRightButtonHeld = false;

const K_UP = 38;
const K_DOWN = 40;
const K_LEFT = 37;
const K_RIGHT = 39;
const K_SPACE = 32;
const K_SHIFT = 16;

const btnUp = document.getElementById("btnUp");
const btnLeftCam = document.getElementById("btnLeftCam");
const btnRightCam = document.getElementById("btnRightCam");
const btnDown = document.getElementById("btnDown");
// const btnJump = document.getElementById('btnJump')

let isbtnUpHeld = false;
let isbtnLeftCamHeld = false;
let isbtnRightCamHeld = false;
let isbtnDownHeld = false;
// let isbtnJumpHeld = false;

class FirstPersonControls {
  constructor(app) {
    this.app = app;
    this.onGround = true;
    this.position = new THREE.Vector3(0, 0, 0);
    this.rotation = new THREE.Vector3(0, 0, 0);
    this.velocity = new THREE.Vector3(0, 0, 0);
    this.keystate = {};
    this.bindEvents();
  }

  bindEvents() {
    // You can only request pointer lock from a user triggered event
    btnForward.addEventListener("click", () => {
      this.keystate[K_FORWARD] = true;
      // You might also need to set a timeout to release the key after a certain time
      setTimeout(() => {
        this.keystate[K_FORWARD] = false;
      }, 100); // Adjust the timeout value as needed
    });

    // Update keystate from down/up events
    window.addEventListener(
      "keydown",
      (evt) => {
        this.keystate[evt.which] = true;
      },
      false
    );
    window.addEventListener(
      "keyup",
      (evt) => {
        this.keystate[evt.which] = false;
      },
      false
    );
    // forward btn desktop
    btnForward.addEventListener("mousedown", () => {
      isButtonHeld = true;
      this.keystate[K_FORWARD] = true;
    });
    btnForward.addEventListener("mouseup", () => {
      isButtonHeld = false;
      this.keystate[K_FORWARD] = false;
    });
    // forward btn mobile
    btnForward.addEventListener("touchstart", () => {
      isButtonHeld = true;
      this.keystate[K_FORWARD] = true;
    });
    btnForward.addEventListener("touchend", () => {
      isButtonHeld = false;
      this.keystate[K_FORWARD] = false;
    });

    // backward btn desktop
    btnBackward.addEventListener("mousedown", () => {
      isBackwardButtonHeld = true;
      this.keystate[K_BACKWARD] = true;
    });
    btnBackward.addEventListener("mouseup", () => {
      isBackwardButtonHeld = false;
      this.keystate[K_BACKWARD] = false;
    });
    // backward btn mobile
    btnBackward.addEventListener("touchstart", () => {
      isBackwardButtonHeld = true;
      this.keystate[K_BACKWARD] = true;
    });
    btnBackward.addEventListener("touchend", () => {
      isBackwardButtonHeld = false;
      this.keystate[K_BACKWARD] = false;
    });

    // left btn desktop
    btnStrafeLeft.addEventListener("mousedown", () => {
      isStrafeLeftButtonHeld = true;
      this.keystate[K_STRAFE_LEFT] = true;
    });
    btnStrafeLeft.addEventListener("mouseup", () => {
      isStrafeLeftButtonHeld = false;
      this.keystate[K_STRAFE_LEFT] = false;
    });
    // left btn mobile
    btnStrafeLeft.addEventListener("touchstart", () => {
      isStrafeLeftButtonHeld = true;
      this.keystate[K_STRAFE_LEFT] = true;
    });
    btnStrafeLeft.addEventListener("touchend", () => {
      isStrafeLeftButtonHeld = false;
      this.keystate[K_STRAFE_LEFT] = false;
    });

    //right btn desktop
    btnStrafeRight.addEventListener("mousedown", () => {
      isStrafeRightButtonHeld = true;
      this.keystate[K_STRAFE_RIGHT] = true;
    });
    btnStrafeRight.addEventListener("mouseup", () => {
      isStrafeRightButtonHeld = false;
      this.keystate[K_STRAFE_RIGHT] = false;
    });
    //right btn mobile
    btnStrafeRight.addEventListener("touchstart", () => {
      isStrafeRightButtonHeld = true;
      this.keystate[K_STRAFE_RIGHT] = true;
    });
    btnStrafeRight.addEventListener("touchend", () => {
      isStrafeRightButtonHeld = false;
      this.keystate[K_STRAFE_RIGHT] = false;
    });

    // up view desktop
    btnUp.addEventListener("mousedown", () => {
      isbtnUpHeld = true;
      this.keystate[K_UP] = true;
    });

    btnUp.addEventListener("mouseup", () => {
      isbtnUpHeld = false;
      this.keystate[K_UP] = false;
    });
    // up view mobile
    btnUp.addEventListener("touchstart", () => {
      isbtnUpHeld = true;
      this.keystate[K_UP] = true;
    });
    btnUp.addEventListener("touchend", () => {
      isbtnUpHeld = false;
      this.keystate[K_UP] = false;
    });

    // down view desktop
    btnDown.addEventListener("mousedown", () => {
      isbtnDownHeld = true;
      this.keystate[K_DOWN] = true;
    });
    btnDown.addEventListener("mouseup", () => {
      isbtnDownHeld = false;
      this.keystate[K_DOWN] = false;
    });
        // down view mobile
        btnDown.addEventListener("touchstart", () => {
            isbtnDownHeld = true;
            this.keystate[K_DOWN] = true;
          });
      
          btnDown.addEventListener("touchend", () => {
            isbtnDownHeld = false;
            this.keystate[K_DOWN] = false;
          });

    // right view desktop
    btnRightCam.addEventListener("mousedown", () => {
      isbtnRightCamHeld = true;
      this.keystate[K_RIGHT] = true;
    });

    btnRightCam.addEventListener("mouseup", () => {
      isbtnRightCamHeld = false;
      this.keystate[K_RIGHT] = false;
    });
        // right view mobile
        btnRightCam.addEventListener("touchstart", () => {
            isbtnRightCamHeld = true;
            this.keystate[K_RIGHT] = true;
          });
      
          btnRightCam.addEventListener("touchend", () => {
            isbtnRightCamHeld = false;
            this.keystate[K_RIGHT] = false;
          });

    // left view desktop
    btnLeftCam.addEventListener("mousedown", () => {
      isbtnLeftCamHeld = true;
      this.keystate[K_LEFT] = true;
    });

    btnLeftCam.addEventListener("mouseup", () => {
      isbtnLeftCamHeld = false;
      this.keystate[K_LEFT] = false;
    });
    // left view mobile
    btnLeftCam.addEventListener("touchstart", () => {
        isbtnLeftCamHeld = true;
        this.keystate[K_LEFT] = true;
      });
  
      btnLeftCam.addEventListener("touchend", () => {
        isbtnLeftCamHeld = false;
        this.keystate[K_LEFT] = false;
      });

    // btnJump.addEventListener('mousedown', () => {
    //     isbtnJumpHeld = true;
    //     this.keystate[K_SPACE] = true;
    // });

    // btnJump.addEventListener('mouseup', () => {
    //     isbtnJumpHeld = false;
    //     this.keystate[K_SPACE] = false;
    // });
  }

  update(delta) {
    let speed = delta * 2.0;
    let motion = new THREE.Vector3(0, 0, 0);
    if (this.keystate[K_SHIFT]) {
      // Holding shift increases speed
      speed *= 1.5;
    }
    if (this.keystate[K_FORWARD]) {
      motion.z -= speed;
    }
    if (isButtonHeld) {
      motion.z -= speed;
    }
    if (isBackwardButtonHeld) {
      motion.z += speed;
    }
    if (isStrafeLeftButtonHeld) {
      motion.x -= speed;
    }
    if (isStrafeRightButtonHeld) {
      motion.x += speed;
    }
    if (this.keystate[K_BACKWARD]) {
      motion.z += speed;
    }
    if (this.keystate[K_STRAFE_LEFT]) {
      motion.x -= speed;
    }
    if (this.keystate[K_STRAFE_RIGHT]) {
      motion.x += speed;
    }
    if (this.keystate[K_UP]) {
      this.rotation.x += speed * 0.5;
    }
    if (isbtnUpHeld) {
      this.rotation.x += speed * 0.5;
    }
    if (this.keystate[K_DOWN]) {
      this.rotation.x -= speed * 0.5;
    }
    if (isbtnDownHeld) {
      this.rotation.x -= speed * 0.5;
    }
    if (this.keystate[K_LEFT]) {
      this.rotation.y += speed * 0.5;
    }
    if (isbtnLeftCamHeld) {
      this.rotation.y += speed * 0.5;
    }
    if (this.keystate[K_RIGHT]) {
      this.rotation.y -= speed * 0.5;
    }
    if (isbtnRightCamHeld) {
      this.rotation.y -= speed * 0.5;
    }
    if (this.keystate[K_SPACE] && this.onGround) {
      motion.y = delta * 60;
      this.onGround = false;
    }
    // if(isbtnJumpHeld && this.onGround){
    //     motion.y = delta * 60;
    //     this.onGround = false;
    // }
    let rotation = new THREE.Matrix4().makeRotationY(this.rotation.y);
    motion.applyMatrix4(rotation);
    this.velocity.add(motion);
    let nextPosition = this.position.clone();
    nextPosition.add(this.velocity);
    if (this.onGround) {
      this.velocity.x *= 0.95;
      this.velocity.z *= 0.95;
    } else {
      // Less friction in air
      this.velocity.x *= 0.97;
      this.velocity.z *= 0.97;
      // Gravity
      this.velocity.y -= delta * 3;
    }
    let x = nextPosition.x;
    let y = nextPosition.y;
    let z = nextPosition.z;
    let terrain = this.app.terrain;
    // Constrain position to terrain bounds
    if (x < 0 || x >= terrain.width - 1) {
      x = this.position.x;
    }
    if (z < 0 || z >= terrain.height - 1) {
      z = this.position.z;
    }
    this.position.x = x;
    this.position.z = z;
    let scale = terrain.mesh.scale.y;
    let ground = 7 + terrain.getHeightAt(x, z) * scale;
    if (this.onGround || y <= ground) {
      y = ground;
      this.velocity.y = 0;
      this.onGround = true;
    }
    this.position.y = y;
    // Apply current transformations to camera
    let camera = this.app.camera;
    camera.position.copy(this.position);
    camera.rotation.set(0, 0, 0);
    camera.rotateY(this.rotation.y);
    camera.rotateX(this.rotation.x);
  }
}
