<template>
  <div>
    <t-breadcrumb>
      <template v-slot:right>
        <t-dropdown-group>
          <t-dropdown
            direction="right"
            :list="[
              { name: 'All posts' },
              { name: 'Draft posts' },
              { name: 'Published posts' },
            ]"
          />
          <t-dropdown
            direction="right"
            :list="[
              { name: 'All access' },
              { name: 'Draft Posts' },
              { name: 'Published Posts' },
            ]"
          />
          <t-dropdown
            direction="right"
            :list="[
              { name: 'All authors' },
              { name: 'Draft Posts' },
              { name: 'Published Posts' },
            ]"
          />
          <t-dropdown
            direction="right"
            :list="[
              { name: 'All tags' },
              { name: 'Draft Posts' },
              { name: 'Published Posts' },
            ]"
          />
          <t-dropdown
            direction="right"
            :list="[
              { name: 'Newest' },
              { name: 'Draft Posts' },
              { name: 'Published Posts' },
            ]"
          />
        </t-dropdown-group>
        <t-button color="green" class="ml-2">New Post</t-button>
      </template>
    </t-breadcrumb>
    <t-post-table></t-post-table>
  </div>
</template>