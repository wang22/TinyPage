<template>
  <div class="w-25 w-auto-sm mx-auto py-5">
    <h4 class="text-center" style="color:var(--blue)">TinyCMS</h4>
    <h4 class="text-center">Welcome to Your Dashboard</h4>
    <p class="text-center">It’s a great day today!</p>
    <b-card>
      <template #header>
        <h4 class="mb-0 text-center">Sign In</h4>
      </template>
      <b-card-body>
        <b-form-group
          label="User name or email"
          label-for="input-1"
        >
          <b-form-input id="input-1" placeholder="Entry your user name or email"></b-form-input>
        </b-form-group>
        <b-form-group
          label="Password"
          label-for="input-1"
        >
          <b-form-input id="input-1" placeholder="Entry your password"></b-form-input>
        </b-form-group>
        <div class="d-flex justify-content-between">
          <b-form-checkbox>
            Remember me
          </b-form-checkbox>
          <b-button variant="primary">
            Sign In
          </b-button>
        </div>
      </b-card-body>
      <template #footer>
        <div class="text-center">
          <b-button variant="white" class="no-bg no-shadow" >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            Forgot Password
          </b-button>
        </div>
      </template>
    </b-card>
  </div>
</template>
