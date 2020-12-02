<template>
  <div class="divide-y divide-gray-100">
    <Nav>
      <NavItem href="/featured" isActive>Featured</NavItem>
      <NavItem href="/popular">Popular</NavItem>
      <NavItem href="/recent">Recent</NavItem>
    </Nav>
    <List>
      <ListItem v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
    </List>
  </div>
</template>

<script>
import Nav from './components/Nav/Nav.vue'
import NavItem from './components/Nav/NavItem.vue'
import List from './components/Nav/List.vue'
import ListItem from './components/Nav/ListItem.vue'

export default {
  props: ['recipes'],
  components: {
    Nav,
    NavItem,
    List,
    ListItem,
  },
}
</script>