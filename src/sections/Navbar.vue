<script setup>
import { DownOutlined } from '@ant-design/icons-vue';

const menuItems = [
    { label: '1st menu item' },
    { label: '2nd menu item' },
    {
        label: 'sub menu',
        children: [
            { label: '3rd menu item' },
            { label: '4th menu item' }
        ]
    },
    {
        label: 'disabled sub menu',
        children: [
            { label: '5th menu item' },
            { label: '6th menu item' }
        ],
    }
];
</script>
<template>
    <nav class="navbar">
        <div class="nav-container">
            <div class="navbar-flex">
                <div class="navbar-logo">
                    <ul class="navbar-list">
                        <li class="navbar-link">
                            <a href="#">Home</a>
                        </li>
                        <li class="navbar-link">
                            <a href="#">About</a>
                        </li>
                        <li class="navbar-link">
                            <a href="#stacks" class="nav__link">Tech Stacks</a>
                        </li>
                        <li class="navbar-link">
                            <a href="#project" class="nav__link">Projects</a>
                        </li>
                        <li class="navbar-link">
                            <a href="#contact" class="nav__link">Contact</a>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </div>
    </nav>
</template>