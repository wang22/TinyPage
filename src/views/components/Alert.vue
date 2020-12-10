<template>
  <t-main-container>
    <b-alert show variant="success" class="bg-success">
      <h4 class="alert-heading">Well done!</h4>
      <p>
        Aww yeah, you successfully read this important alert message. This
        example text is going to run a bit longer so that you can see how
        spacing within an alert works with this kind of content.
      </p>
      <hr />
      <p class="mb-0">
        Whenever you need to, be sure to use margin utilities to keep things
        nice and tidy.
      </p>
    </b-alert>
    <div class="row">
      <div class="col-md-6">
        <h6>Color</h6>
        <b-alert show variant="primary">Primary Alert</b-alert>
        <b-alert show variant="secondary">Secondary Alert</b-alert>
        <b-alert show variant="success">Success Alert</b-alert>
        <b-alert show variant="danger">Danger Alert</b-alert>
        <b-alert show variant="warning">Warning Alert</b-alert>
        <b-alert show variant="info">Info Alert</b-alert>
        <b-alert show variant="light">Light Alert</b-alert>
        <b-alert show variant="dark">Dark Alert</b-alert>
      </div>
      <div class="col-md-6">
            <h6>Color of links within alerts</h6>
            <b-alert show variant="primary"><a href="#" class="alert-link">Primary Alert</a></b-alert>
            <b-alert show variant="secondary"><a href="#" class="alert-link">Secondary Alert</a></b-alert>
            <b-alert show variant="success"><a href="#" class="alert-link">Success Alert</a></b-alert>
            <b-alert show variant="danger"><a href="#" class="alert-link">Danger Alert</a></b-alert>
            <b-alert show variant="warning"><a href="#" class="alert-link">Warning Alert</a></b-alert>
            <b-alert show variant="info"><a href="#" class="alert-link">Info Alert</a></b-alert>
            <b-alert show variant="light"><a href="#" class="alert-link">Light Alert</a></b-alert>
            <b-alert show variant="dark"><a href="#" class="alert-link">Dark Alert</a></b-alert>
      </div>
      <div class="col-md-6">
        <h6>Count Down</h6>
        <b-alert
            :show="dismissCountDown"
            dismissible
            variant="warning"
            @dismissed="dismissCountDown=0"
            @dismiss-count-down="countDownChanged"
        >
            <p>This alert will dismiss after {{ dismissCountDown }} seconds...</p>
            <b-progress
                variant="warning"
                :max="dismissSecs"
                :value="dismissCountDown"
                height="4px"
            ></b-progress>
        </b-alert>
        <b-button @click="showAlert" variant="info" class="m-1" block>
            Show alert with count-down timer
        </b-button>
        <h6>Dismissible alerts</h6>
        <b-alert show dismissible>
            Dismissible Alert! Click the close button over there <b>&rArr;</b>
        </b-alert>
      </div>
    </div>
  </t-main-container>
</template>
<script>
export default {
  data () {
    return {
      dismissSecs: 10,
      dismissCountDown: 0,
      showDismissibleAlert: false
    }
  },
  methods: {
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    }
  }
}
</script>
