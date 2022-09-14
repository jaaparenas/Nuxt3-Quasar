
<template>
  <q-page class="row justify-center items-center">
    <div class="column">
      <div class="row">
        <q-card square bordered class="q-pa-lg shadow-1">
          <q-card-section>
            <q-form>
              <q-input square filled clearable type="email" label="email" />
              <q-input
                color="light-green-7"
                square
                filled
                clearable
                type="password"
                label="password"
              />
            </q-form>
          </q-card-section>
          <q-card-actions>
            <q-btn
              color="light-green-7"
              size="lg"
              class="full-width"
              label="Login"
            />
          </q-card-actions>
          <q-card-section class="text-center">
            <div class="text-grey-6">Not reigistered?</div>
            <div class="text-grey-6">Created an Account</div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "simple",
});
</script>