<template>
    <div>
        <div class="w-full flex items-center p-4">
            <span class="font-bold p-2">{{ $t('total') }}: {{ filteredItems.length }}</span>
            <div class="join">
                <button class="join-item btn" @click="prevPage" :disabled="currentPage === 1">{{ $t('previous') }}</button>
                <button class="join-item btn btn-disabled">{{ currentPage }} / {{ pageCount }}</button>
                <button class="join-item btn" @click="nextPage" :disabled="currentPage === pageCount">{{ $t('next')
                }}</button>
            </div>
            <select v-model="pageSize" class="select select-bordered max-w-xs ml-2">
                <option :value="filteredItems.length">{{ $t('showAll') }}</option>
                <option v-for="size in [5, 10, 20, 50, 100]" :key="size" :value="size">{{ size }}</option>
            </select>
            <slot name="buttons"></slot>
            <Button icon="fa fa-refresh" @click="$emit('refresh')" label="refresh" />
            <div class="relative ml-2">
                <font-awesome-icon :icon="['fas', 'search']" class="absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input type="search" v-model="searchTerm" :placeholder="$t('enterTips')"
                    class="input input-bordered w-full max-w-xs pl-8" />
            </div>
            <template v-if="uniqueGroupNames.length > 0">
                <select v-model="searchGroup" class="select select-bordered max-w-xs ml-2">
                    <option value="">{{ $t('allGroups') }}</option>
                    <option v-for="item in uniqueGroupNames" :key="item.group_name" :value="item.group_name">
                        {{ item.group_name }}
                    </option>
                </select>
            </template>
        </div>
        <slot :items="paginatedItems"></slot>
    </div>
</template>


<script>
import Button from './Button.vue'

export default {
    components: {
        Button,
    },
    props: {
        items: {
            type: Array,
            required: true
        },
        
        searchKeys: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            currentPage: 1,
            pageSize: 20,
            searchTerm: '',
            searchGroup: '',
            showDemoTip: false,
        }
    },
    computed: {
        uniqueGroupNames() {
            return this.items.reduce((unique, item) => {
                if (item.group_name && !unique.some(obj => obj.group_name === item.group_name)) {
                    unique.push(item);
                }
                return unique;
            }, []).sort((a, b) => a.group_name ? a.group_name.localeCompare(b.group_name) : 0);
        },
        filteredItems() {
            if (this.searchTerm) {
                return this.items.filter(item =>
                    this.searchKeys.some(key =>
                        item[key] ? String(item[key]) === this.searchTerm : false
                    ) &&
                    (!this.searchGroup || item.group_name === this.searchGroup)
                );
            } else {
                return this.items.filter(item =>
                    !this.searchGroup || item.group_name === this.searchGroup
                );
            }
        },
        pageCount() {
            return Math.ceil(this.filteredItems.length / this.pageSize);
        },
        paginatedItems() {
            const start = (this.currentPage - 1) * this.pageSize;
            const end = start + this.pageSize;
            return this.filteredItems.slice(start, end);
        }
    },
    methods: {
        nextPage() {
            if (this.currentPage < this.pageCount) {
                this.currentPage++;
            }
        },
        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        }
    },
    mounted() {
        this.showDemoTip = import.meta.env.VITE_APP_MOCK === 'true';
    }
}
</script>