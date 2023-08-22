<template>
    <view>
        <web-view :webview-styles="webviewStyles" :src='webUrl'></web-view>
    </view>
</template>

<script>
	export default {
		name: 'webview',
		data() {
		    return {
		        webviewStyles: {
		            progress: {
		                color: '#FF3333'
		            }
		        }
		    }
		},
		props: {
			webUrl: String
		},
		onLoad: function() {
			
		}
	}
</script>

<style lang='stylus' scoped>

</style>
