<template>
  <div class="text-center">
    <v-bottom-sheet inset>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="red"
          dark
          v-bind="attrs"
          v-on="on"
          @click="loadSrc()"
        >
          Listen To Analysis
        </v-btn>
      </template>
      <v-card tile>
        <v-progress-linear
          :value='this.timeLineValue'
          class="my-0"
          height="3"
        ></v-progress-linear>

        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>{{title}}</v-list-item-title>
              <v-list-item-subtitle>By: ICGroupsFX</v-list-item-subtitle>
            </v-list-item-content>

            <v-spacer>
                <audio id="audio">
                  <source :src=audio.url type="audio/mpeg">
                </audio>
            </v-spacer>

            <v-list-item-icon>
              <v-btn icon @click="previousSeconds()">
                <v-icon>mdi-rewind-10</v-icon>
              </v-btn>
            </v-list-item-icon>

            <v-list-item-icon :class="{ 'mx-5': $vuetify.breakpoint.mdAndUp }">
              <v-btn icon @click="togglePlay()">
                  <div v-if="playBtn">
                <v-icon>mdi-play</v-icon>
                  </div>
                  <div v-else>
                <v-icon>mdi-pause</v-icon>
                  </div>
              </v-btn>
            </v-list-item-icon>

            <v-list-item-icon
              class="ml-0"
              :class="{ 'mr-3': $vuetify.breakpoint.mdAndUp }"
            >
              <v-btn icon @click="nextSeconds()">
                <v-icon>mdi-fast-forward-10</v-icon>
              </v-btn>
            </v-list-item-icon>
          </v-list-item>
        </v-list>
      </v-card>
    </v-bottom-sheet>
  </div>

</template>
<script>
export default {
        props: {
        title: String,
        audio: {
            url: String,
            filename: String
        },
        author: {
            username: String
        },
        createdAt: String,
        selectedCategory:{
            id: String
            } 
    },
    data() {
        return {
            playBtn: true,
            timeLineValue: 0,
            timeLineRefresh: null,
        }
    },
    methods: {
      loadSrc() {
        const audio = document.getElementById('audio');
        if (audio != null){
          audio.src = this.$props.audio.url;
        }
      },
        togglePlay: function() {
            this.playBtn = this.playBtn !== true
            if(this.playBtn === false){
                document.getElementById('audio').play();
                
                }else {
                document.getElementById('audio').pause();
            }
             this.timeLineValue = document.getElementById('audio').currentTime / document.getElementById('audio').duration * 100
        },
        timeLineBar: function() {
          if(document.getElementById('audio')){
            this.timeLineValue = document.getElementById('audio').currentTime / document.getElementById('audio').duration * 100
          }
        },
        previousSeconds: function() {
            this.timeLineValue = document.getElementById('audio').currentTime - 10
            document.getElementById('audio').currentTime = document.getElementById('audio').currentTime - 10
        },
        nextSeconds: function() {
            this.timeLineValue = document.getElementById('audio').currentTime + 10;
            document.getElementById('audio').currentTime = document.getElementById('audio').currentTime + 10;
        },
    },

    mounted () {
      this.loadSrc();
      this.timeLineRefresh = setInterval(this.timeLineBar, 100);
    }
}
</script>