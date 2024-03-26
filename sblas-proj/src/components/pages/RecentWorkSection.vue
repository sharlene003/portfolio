<template>
  <div class="text-weight-bold text-h5 text-primary q-mb-xl">
    Recent Projects
  </div>
  <div class="row q-pt-xl animate-slide-left">
    <div class="col q-pa-md col-xs-12 col-md-3">
      <q-card class="my-card">
        <q-img height="230px" src="../../assets/logo/bsp_logo.jpg">
          <div class="absolute-bottom text-subtitle2 text-center">BSP</div>
        </q-img>
      </q-card>
    </div>
    <div class="col q-pa-md col-xs-12 col-md-3">
      <q-card class="my-card">
        <q-img height="230px" src="../../assets/logo/maynilad_logo.png">
          <div class="absolute-bottom text-subtitle2 text-center">MAYNILAD</div>
        </q-img>
      </q-card>
    </div>
    <div class="col q-pa-md col-xs-12 col-md-3">
      <q-card class="my-card">
        <q-img height="230px" src="../../assets/logo/s&r_logo.jpg">
          <div class="absolute-bottom text-subtitle2 text-center">S&R</div>
        </q-img>
      </q-card>
    </div>
    <div class="col q-pa-md col-xs-12 col-md-3">
      <q-card class="my-card">
        <q-img height="230px" src="../../assets/logo/pitmasters_logo.jpg">
          <div class="absolute-bottom text-subtitle2 text-center">
            PITMASTERS
          </div>
        </q-img>
      </q-card>
    </div>
  </div>
  <div class="row q-pt-xl animate-slide-right">
    <div class="col q-pa-md col-xs-12 col-md-3">
      <q-card class="my-card">
        <q-img height="230px" src="../../assets/logo/yondu_logo.jpg">
          <div class="absolute-bottom text-subtitle2 text-center">YONDU</div>
        </q-img>
      </q-card>
    </div>
    <div class="col q-pa-md col-xs-12 col-md-3">
      <q-card class="my-card">
        <q-img height="230px" src="../../assets/logo/bench_logo.png">
          <div class="absolute-bottom text-subtitle2 text-center">BENCH</div>
        </q-img>
      </q-card>
    </div>
    <div class="col q-pa-md col-xs-12 col-md-3">
      <q-card class="my-card">
        <q-img height="230px" src="../../assets/logo/vivo_logo.png">
          <div class="absolute-bottom text-subtitle2 text-center">VIVO</div>
        </q-img>
      </q-card>
    </div>
    <div class="col q-pa-md col-xs-12 col-md-3">
      <q-card class="my-card">
        <q-img height="230px" src="../../assets/logo/bigdish_logo.png">
          <div class="absolute-bottom text-subtitle2 text-center">BIGDISH</div>
        </q-img>
      </q-card>
    </div>
  </div>
</template>
<style>
@keyframes slide-in-left {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0%);
  }
}
@keyframes slide-in-right {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
}
.animate-slide-left {
  object-fit: cover;
  animation: img_key linear forwards;
  animation-timeline: view(block);
  animation-range: cover 0% cover 50%;
  overflow: hidden;
  animation-name: slide-in-left;
  animation-duration: 2s;
  animation-timing-function: ease-in;
}
@keyframes flip {
  0% {
    transform: perspective(400px) rotateY(0);
  }
  100% {
    transform: perspective(400px) rotateY(180deg);
  }
}
.animate-slide-right {
  object-fit: cover;
  animation: img_key linear forwards;
  animation-timeline: view(block);
  animation-range: cover 0% cover 50%;
  overflow: hidden;
  animation-name: slide-in-right;
  animation-duration: 2s;
  animation-timing-function: ease-in;
}
</style>
