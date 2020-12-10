<template>
  <t-main-container>
    <b-row>
      <b-col cols="6">
        <b-card header="Form">
          <b-card-body>
            <b-form>
              <b-form-group
                id="input-group-1"
                label="Email address:"
                label-for="input-1"
                description="We'll never share your email with anyone else."
              >
                <b-form-input
                  id="input-1"
                  type="email"
                  required
                  placeholder="Enter email"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-2"
                label="Your Name:"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  required
                  placeholder="Enter name"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-3"
                label="Food:"
                label-for="input-3"
              >
                <b-form-select
                  id="input-3"
                  required
                ></b-form-select>
              </b-form-group>

              <b-form-group id="input-group-4">
                <b-form-checkbox-group id="checkboxes-4">
                  <b-form-checkbox value="me">Check me out</b-form-checkbox>
                  <b-form-checkbox value="that">Check that out</b-form-checkbox>
                </b-form-checkbox-group>
              </b-form-group>

              <b-button type="submit" variant="primary">Submit</b-button>
              <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col cols="6">
        <b-card header="Checkbox">
            <b-card-body>
                <b-form-group label="Form-checkbox-group inline checkboxes (default)">
                <b-form-checkbox-group
                    v-model="selected"
                    :options="options"
                    name="flavour-1a"
                ></b-form-checkbox-group>
                </b-form-group>

                <b-form-group label="Form-checkbox-group stacked checkboxes">
                <b-form-checkbox-group
                    v-model="selected"
                    :options="options"
                    name="flavour-2a"
                    stacked
                ></b-form-checkbox-group>
                </b-form-group>

                <b-form-group label="Individual stacked checkboxes (default)">
                <b-form-checkbox
                    v-for="option in options"
                    v-model="selected"
                    :key="option.value"
                    :value="option.value"
                    name="flavour-3a"
                >
                    {{ option.text }}
                </b-form-checkbox>
                </b-form-group>

                <b-form-group label="Individual inline checkboxes">
                <b-form-checkbox
                    v-for="option in options"
                    v-model="selected"
                    :key="option.value"
                    :value="option.value"
                    name="flavour-4a"
                    inline
                >
                    {{ option.text }}
                </b-form-checkbox>
                </b-form-group>
            </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </t-main-container>
</template>
<script>
export default {
  data () {
    return {
      selected: [], // Must be an array reference!
      options: [
        { text: 'Orange', value: 'orange' },
        { text: 'Apple', value: 'apple' },
        { text: 'Pineapple', value: 'pineapple' },
        { text: 'Grape', value: 'grape' }
      ]
    }
  }
}
</script>
