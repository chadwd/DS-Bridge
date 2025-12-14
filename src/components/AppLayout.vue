<template>
  <v-app>
    <!-- App Bar (Header) -->
    <v-app-bar
      :elevation="1"
      class="app-bar"
    >
      <template #prepend>
        <v-app-bar-nav-icon
          @click.stop="drawer = !drawer"
          class="nav-toggle"
        />
      </template>

      <v-app-bar-title class="app-title">
        Design System
      </v-app-bar-title>

      <template #append>
        <v-btn
          icon="mdi-github"
          href="https://github.com/chadwd/DS-Bridge"
          target="_blank"
          rel="noopener noreferrer"
          variant="text"
          class="header-button"
        />
      </template>
    </v-app-bar>

    <!-- Navigation Drawer -->
    <v-navigation-drawer
      v-model="drawer"
      :rail="rail"
      permanent
      @mouseenter="rail = false"
      @mouseleave="rail = true"
      class="nav-drawer"
    >
      <v-list>
        <!-- Logo / Brand -->
        <v-list-item
          v-if="!rail"
          title="Design System"
          subtitle="v0.1.0"
          class="nav-header"
        >
          <template #prepend>
            <v-avatar
              color="primary"
              size="large"
            >
              DS
            </v-avatar>
          </template>
        </v-list-item>

        <v-divider v-if="!rail" class="my-2" />

        <!-- Navigation Items -->
        <v-list-item
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          :title="item.title"
          :prepend-icon="item.icon"
          class="nav-item"
        />
      </v-list>

      <template #append>
        <v-divider class="my-2" />
        <v-list-item
          title="GitHub"
          prepend-icon="mdi-github"
          href="https://github.com/chadwd/DS-Bridge"
          target="_blank"
          rel="noopener noreferrer"
          class="nav-footer-item"
        />
      </template>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main class="app-main">
      <slot />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface NavItem {
  to: string;
  title: string;
  icon: string;
}

export default defineComponent({
  name: 'AppLayout',
  data() {
    return {
      drawer: true,
      rail: true,
      navItems: [
        {
          to: '/',
          title: 'Home',
          icon: 'mdi-home',
        },
        {
          to: '/components',
          title: 'Components',
          icon: 'mdi-palette',
        },
        {
          to: '/tokens',
          title: 'Tokens',
          icon: 'mdi-palette-advanced',
        },
        {
          to: '/documentation',
          title: 'Documentation',
          icon: 'mdi-book',
        },
      ] as NavItem[],
    };
  },
});
</script>

<style scoped>
.app-bar {
  background: linear-gradient(135deg, rgb(99, 102, 241) 0%, rgb(79, 70, 229) 100%);
  color: white;
}

.app-title {
  font-weight: 600;
  letter-spacing: 0.5px;
}

.header-button {
  color: white;
}

.nav-drawer {
  border-right: 1px solid #e5e7eb;
}

.nav-header {
  margin-bottom: 12px;
  padding: 16px 12px;
}

.nav-item {
  margin-bottom: 4px;
  border-radius: 8px;
}

.nav-item:hover {
  background-color: #f3f4f6;
}

.nav-footer-item {
  margin-top: auto;
}

.app-main {
  background-color: #f9fafb;
}
</style>
