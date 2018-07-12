<!-- WITHOUT BOOTSTRAP MODAL -->
<!-- <template>
  <div id="app">
    <layout-golden class="screen">
      <gl-col :closable="false">
        <gl-row :closable="false">
          <gl-component title="compA">
            <h1>CompA</h1>
            tab: {{selected}}
            <button @click="bottomSheet = !bottomSheet">Toggle</button>
            <button @click="addStack">Add</button>
          </gl-component>
          <gl-stack ref="myStack">
            <gl-component v-for="stackSub in stackSubs" :key="stackSub" :title="'dynamic'+stackSub">
              Added item (id: {{stackSub}})
              <button @click="remStack(stackSub)">Remove</button>
            </gl-component>
          </gl-stack>
        </gl-row>
        <gl-stack v-model="selected">
          <gl-component title="compB" tab-id="b">
            <h1>CompB</h1>
            <button @click="selected = 'c'">Toggle</button>
          </gl-component>
          <gl-component title="compC" tab-id="c">
            <h1>CompC</h1>
            <button @click="selected = 'b'">Toggle</button>
          </gl-component>
        </gl-stack>
        <gl-component v-if="bottomSheet">
          <h1>Bottom</h1>
        </gl-component>
      </gl-col>
    </layout-golden>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function() {
    return {
      bottomSheet: false,
      selected: 'b',
      stackSubs: [1],
      ssId: 1,
    };
  },
  methods: {
    addStack() {
      //this.$refs.myStack.addGlChild(...)
      this.stackSubs.push(++this.ssId);
    },
    remStack(id) {
      var ndx = this.stackSubs.indexOf(id);
      if (~ndx) this.stackSubs.splice(ndx, 1);
    },
  },
};
</script>

<style>
body {
  overflow: hidden; /* The 'light' theme let a scroll-bar on the right of the main container */
}

.screen {
  width: 100vw;
  height: 100vh;
}
</style> -->


<!-- WITH BOOTSTRAP MODAL -->
<template>
  <div id="app">
    <layout-golden class="screen">
      <gl-col :closable="false">
        <gl-row :closable="false">
          <gl-component title="compA">
            <h1>CompA</h1>
            <test />
            tab: {{selected}}
            <button @click="bottomSheet = !bottomSheet">Toggle</button>
            <b-btn variant="success" @click="showModal">Add Nav Item</b-btn>
          </gl-component>
          <gl-stack ref="myStack">
            <gl-component v-for="stackSub in stackSubs" :key="stackSub" :title="'dynamic'+stackSub">
              Added Dossier item (id: {{stackSub}})
              <p v-for="feature in features">You've selected the {{ feature.navFeature }} item.</p>
              <button @click="remStack(stackSub)">Remove</button>
            </gl-component>
          </gl-stack>
        </gl-row>
        <gl-stack v-model="selected">
          <gl-component title="compB" tab-id="b">
            <h1>CompB</h1>
            <button @click="selected = 'c'">Toggle</button>
          </gl-component>
          <gl-component title="compC" tab-id="c">
            <h1>CompC</h1>
            <button @click="selected = 'b'">Toggle</button>
          </gl-component>
        </gl-stack>
        <gl-component v-if="bottomSheet">
          <h1>Bottom</h1>
        </gl-component>
      </gl-col>
      <b-modal ref="myModalRef" hide-footer title="Using Component Methods">
        <div class="d-block text-center">
          <label for="">Nav Menu Item: </label>
          <select v-model="selected">
            <option disabled value="">Please select one</option>
            <option v-for="feature in features">{{ feature.navFeature }}</option>
          </select>
          <br>
          <span>Selected Nav Item: {{ selected }}</span>

        </div>
        <b-btn class="mt-3" variant="outline-danger" block @click="addStack">Add Nav Item</b-btn>
      </b-modal>
    </layout-golden>
  </div>
</template>

<script>
import Test from './Test.vue'

export default {
  name: 'app',
  components: {
    Test
  },
  data: function() {
    return {
      bottomSheet: false,
      // selected: 'b',
      stackSubs: [1],
      ssId: 1,
      newDossierNavItem: '',
      selected: '',
      features: [
        { navFeature: 'Assets' },
        { navFeature: 'Work Orders' },
        { navFeature: 'Work Requests' },
        { navFeature: 'Work Estimates' },
        { navFeature: 'Parts' },
        { navFeature: 'Personnel' },
        { navFeature: 'Vendors' },
        { navFeature: 'Standard Repairs' },
        { navFeature: 'Tasks' }
      ]
    };
  },
  methods: {
    addStack() {
      //this.$refs.myStack.addGlChild(...)
      this.stackSubs.push(++this.ssId);
      this.$refs.myModalRef.hide();
    },
    remStack(id) {
      var ndx = this.stackSubs.indexOf(id);
      if (~ndx) this.stackSubs.splice(ndx, 1);
    },
    showModal() {
      this.$refs.myModalRef.show()
    },
    hideModal() {
      this.$refs.myModalRef.hide()
    }
  },
};
</script>

<style>
body {
  overflow: hidden; /* The 'light' theme let a scroll-bar on the right of the main container */
}
.screen {
  width: 100vw;
  height: 100vh;
}
</style>
