<template>
    <div>
        <div v-clickoutside="hideReplyBtn" @click="inputFocus" class="my-reply">
            <el-avatar class="header-img" :size="40" :src="myHeader"></el-avatar>
            <div class="reply-info" >
                <div 
                tabindex="0" 
                contenteditable="true" 
                id="replyInput" 
                spellcheck="false" 
                placeholder="星海横流，岁月成碑，时留文字，藏于心间" 
                class="reply-input" 
                @focus="showReplyBtn"  
                @input="onDivInput($event)"
                >
                </div>
            </div>
            <div class="reply-btn-box" v-show="btnShow">
                <el-button class="reply-btn" size="medium" @click="sendComment" type="primary" style="">发表评论</el-button>
            </div>
        </div>

        <div v-for="(item,i) in comments" :key="i" class="author-title reply-father">
            <el-avatar class="header-img" :size="40" :src="item.headImg"></el-avatar>
            <div class="author-info">
              <span>  <span class="author-name">{{item.name}}</span>
                      <span class="author-time" style="font-size:20px;margin-left:5%">{{item.time}}</span>
              </span>
            </div>
            <div class="icon-btn" style="color:white">
                <span @click="showReplyInput(i,item.name,item.id)"><i class="iconfont el-icon-s-comment" style=""></i><span style="font-size:20px">{{item.commentNum}}</span></span>
                <!-- <i class="iconfont el-icon-caret-top"></i>{{item.like}} -->
            </div>
            <div class="talk-box">
                <p>
                    <span class="reply" style="color:white;font-size:20px">{{item.comment}}</span>
                </p>
            </div>
            <div class="reply-box" style="border-radius:20px">
                <div v-for="(reply,j) in item.reply" :key="j" class="author-title">
                    <el-avatar class="header-img" :size="40" :src="reply.fromHeadImg"></el-avatar>
                    <div class="author-info">
                     <span>   <span class="author-name" style="color:black;font-size:20px">{{reply.from}}</span>
                        <span class="author-time" style="font-size:20px;margin-left:5%">{{reply.time}}</span></span>
                    </div>
                    <div class="icon-btn"  style="color:black">
                        <span @click="showReplyInput(i,reply.from,reply.id)"><i class="iconfont el-icon-s-comment"></i><span style="font-size:20px">{{reply.commentNum}}</span></span>
                        <!-- <i class="iconfont el-icon-caret-top"></i>{{reply.like}} -->
                    </div>
                    <div class="talk-box">
                        <p>
                            <span style="font-size:20px">回复 &nbsp;{{reply.to}} ：</span>
                            <span class="reply" style="font-size:20px">{{reply.comment}}</span>
                        </p>
                    </div>
                    <div class="reply-box">

                    </div>
                </div>
            </div>
            <div  v-show="_inputShow(i)" class="my-reply my-comment-reply" >
                <el-avatar class="header-img" :size="40" :src="myHeader"></el-avatar>
                <div class="reply-info" >
                    <div tabindex="0" contenteditable="true" spellcheck="false" placeholder="我耗尽了笔墨，却道不出卿的故事"   @input="onDivInput($event)"  class="reply-input reply-comment-input"></div>
                </div>
                <div class=" reply-btn-box">
                    <el-button class="reply-btn" size="medium" @click="sendCommentReply(i,j)"  type="primary">发表评论</el-button>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
const clickoutside = {
    // 初始化指令
    bind(el, binding, vnode) {
    function documentHandler(e) {
    // 这里判断点击的元素是否是本身，是本身，则返回
        if (el.contains(e.target)) {
            return false;
        }
    // 判断指令中是否绑定了函数
        if (binding.expression) {
            // 如果绑定了函数 则调用那个函数，此处binding.value就是handleClose方法
            binding.value(e);
        }
    }
    // 给当前元素绑定个私有变量，方便在unbind中可以解除事件监听
    el.vueClickOutside = documentHandler;
    document.addEventListener('click', documentHandler);
    },
    update() {},
    unbind(el, binding) {
    // 解除事件监听
    document.removeEventListener('click', el.vueClickOutside);
    delete el.vueClickOutside;
  },
};
export default {
    name:'ArticleComment',
    data(){
        return{
            btnShow: false,
            index:'0',
            replyComment:' ',
            myName:'我是敷羽',
            myHeader:'https://fishbuild-1310853011.cos.ap-beijing.myqcloud.com/logo.jpg',
            myId:19870621,
            to:'',
            toId:-1,
            comments:[
                // {
                //     name:'Lana Del Rey',
                //     id:19870621,
                //     headImg:'https://ae01.alicdn.com/kf/Hd60a3f7c06fd47ae85624badd32ce54dv.jpg',
                //     comment:'我发布一张新专辑Norman Fucking Rockwell,大家快来听啊',
                //     time:'2022年8月26日 17:20',
                //     commentNum:2,
                //     like:15,
                //     inputShow:false,
                //     reply:[
                //         {
                //             from:'Taylor Swift',
                //             fromId:19891221,
                //             fromHeadImg:'https://ae01.alicdn.com/kf/H94c78935ffa64e7e977544d19ecebf06L.jpg',
                //             to:'Lana Del Rey',
                //             toId:19870621,
                //             comment:'我很喜欢你的新专辑！！',
                //             time:'2022年8月26日 17:23',
                //             commentNum:1,
                //             like:15,
                //             inputShow:false
                //         },
                //         {
                //             from:'Ariana Grande',
                //             fromId:1123,
                //             fromHeadImg:'https://ae01.alicdn.com/kf/Hf6c0b4a7428b4edf866a9fbab75568e6U.jpg',
                //             to:'Lana Del Rey',
                //             toId:19870621,
                //             comment:'别忘记宣传我们的合作单曲啊',
                //             time:'2022年8月26日 17:23',
                //             commentNum:0,
                //             like:5,
                //             inputShow:false

                //         }
                //     ]
                // },
                {
                    name:'我是敷羽',
                    id:19891221,
                    headImg:'https://fishbuild-1310853011.cos.ap-beijing.myqcloud.com/logo.jpg',
                    comment:'欢迎来到评论区',
                    time:'2022年8月26日 17:21',
                    commentNum:1,
                    like:0,
                    inputShow:false,
                    reply:[
                        {
                            from:'我是敷羽的朋友',
                            fromId:19870621,
                            fromHeadImg:'https://fishbuild-1310853011.cos.ap-beijing.myqcloud.com/train.jpg',
                            to:'我是敷羽',
                            toId:19891221,
                            comment:'你好，我是敷羽！',
                            time:'2022年8月26日 17:22',
                            commentNum:0,
                            like:0,
                            inputShow:false

                        }
                    ]
                },
                {
                    name:'敷羽Norman',
                    id:20190830,
                    headImg:'https://fishbuild-1310853011.cos.ap-beijing.myqcloud.com/bgdayu.jpg',
                    comment:'你好啊，欢迎欢迎！！',
                    time:'2022年8月26日 17:23',
                    commentNum:1,
                    like:0,
                    inputShow:false,
                    reply:[
                        {
                            from:'我是敷羽的朋友',
                            fromId:19870621,
                            fromHeadImg:'https://fishbuild-1310853011.cos.ap-beijing.myqcloud.com/train.jpg',
                            to:'我是敷羽',
                            toId:19891221,
                            comment:'你好，我是敷羽！',
                            time:'2022年8月26日 17:22',
                            commentNum:0,
                            like:0,
                            inputShow:false

                        }
                    ]
                },
                 {
                    name:'敷羽Special',
                    id:20190830,
                    headImg:'https://fishbuild-1310853011.cos.ap-beijing.myqcloud.com/bg2.jpg',
                    comment:'你好啊，欢迎欢迎！！',
                    time:'2022年8月26日 18:03',
                    commentNum:1,
                    like:0,
                    inputShow:false,
                    reply:[
                        {
                            from:'我是敷羽的朋友',
                            fromId:19870621,
                            fromHeadImg:'https://fishbuild-1310853011.cos.ap-beijing.myqcloud.com/train.jpg',
                            to:'我是敷羽',
                            toId:19891221,
                            comment:'你好，我是敷羽！',
                            time:'2022年8月26日 17:22',
                            commentNum:0,
                            like:0,
                            inputShow:false

                        }
                    ]
                },
                 {
                    name:'敷羽Excellent',
                    id:20190830,
                    headImg:'https://fishbuild-1310853011.cos.ap-beijing.myqcloud.com/bg3.jpg',
                    comment:'你好啊，欢迎欢迎！！',
                    time:'2022年8月26日 18:43',
                    commentNum:0,
                    like:0,
                    inputShow:false,
                    reply:[]
                },
            ]
        }
    },
    directives: {clickoutside},
    methods: {
        inputFocus(){
            var replyInput = document.getElementById('replyInput');
            replyInput.style.padding= "8px 8px"
            replyInput.style.border ="2px solid blue"
            replyInput.focus()
        },  
        showReplyBtn(){
            this.btnShow = true
        },
        hideReplyBtn(){
            this.btnShow = false
            replyInput.style.padding= "10px"
            replyInput.style.border ="none"
        },
        showReplyInput(i,name,id){
            this.comments[this.index].inputShow = false
            this.index =i
            this.comments[i].inputShow = true
            this.to = name
            this.toId = id
        },
        _inputShow(i){
            return this.comments[i].inputShow 
        },
        sendComment(){
            if(!this.replyComment){
                 this.$message({
                    showClose: true,
                    type:'warning',
                    message:'评论不能为空'
                })
            }else{
                let a ={}
                let input =  document.getElementById('replyInput')
                let timeNow = new Date().getTime();
                let time= this.dateStr(timeNow);
                a.name= this.myName
                a.comment =this.replyComment
                a.headImg = this.myHeader
                a.time = time
                a.commentNum = 0
                a.like = 0
                this.comments.push(a)
                this.replyComment = ''
                input.innerHTML = '';

            }
        },
        sendCommentReply(i,j){
            if(!this.replyComment){
                 this.$message({
                    showClose: true,
                    type:'warning',
                    message:'评论不能为空'
                })
            }else{
                let a ={}
                let timeNow = new Date().getTime();
                let time= this.dateStr(timeNow);
                a.from= this.myName
                a.to = this.to
                a.fromHeadImg = this.myHeader
                a.comment =this.replyComment
                a.time = time
                a.commentNum = 0
                a.like = 0
                this.comments[i].reply.push(a)
                this.replyComment = ''
                document.getElementsByClassName("reply-comment-input")[i].innerHTML = ""
            }
        },
        onDivInput: function(e) {
            this.replyComment = e.target.innerHTML;
        },
        dateStr(date){
            //获取js 时间戳
            var time=new Date().getTime();
            //去掉 js 时间戳后三位，与php 时间戳保持一致
            time=parseInt((time-date)/1000);
            //存储转换值 
            var s;
            if(time<60*10){//十分钟内
                return '刚刚';
            }else if((time<60*60)&&(time>=60*10)){
                //超过十分钟少于1小时
                s = Math.floor(time/60);
                return  s+"分钟前";
            }else if((time<60*60*24)&&(time>=60*60)){ 
                //超过1小时少于24小时
                s = Math.floor(time/60/60);
                return  s+"小时前";
            }else if((time<60*60*24*30)&&(time>=60*60*24)){ 
                //超过1天少于30天内
                s = Math.floor(time/60/60/24);
                return s+"天前";
            }else{ 
                //超过30天ddd
                var date= new Date(parseInt(date));
                return date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate();
            }
        }
    },    
}
</script>

<style  scoped>
.my-reply {
	 padding: 10px;
	 /* background-color: #fafbfc; */
}
 .my-reply .header-img {
	 display: inline-block;
	 vertical-align: top;
}
 .my-reply .reply-info {
	 display: inline-block;
	 margin-left: 5px;
	 width: 90%;
}
 @media screen and (max-width: 1200px) {
	 .my-reply .reply-info {
		 width: 80%;
	}
}
 .my-reply .reply-info .reply-input {
	 min-height: 20px;
	 line-height: 22px;
	 padding: 10px 10px;
	 color:black;
	 background-color: #fff;
	 border-radius: 10px;
     font-size:18px;
}
 .my-reply .reply-info .reply-input:empty:before {
	 content: attr(placeholder);
}
 .my-reply .reply-info .reply-input:focus:before {
	 content: none;
}
 .my-reply .reply-info .reply-input:focus {
	 padding: 8px 8px;
	 border: 2px solid rgba(51,159,205);
	 box-shadow: none;
	 outline: none;
}
 .my-reply .reply-btn-box {
	 height: 25px;
	 margin: 10px 0;
}
 .my-reply .reply-btn-box .reply-btn {
	 position: relative;
	 float: right;
	 margin-right: 15px;
}
 .my-comment-reply {
	 margin-left: 50px;
}
 .my-comment-reply .reply-input {
	 width: flex;
}
 .author-title:not(:last-child) {
	 border-bottom: 1px solid rgba(178,186,194,0.3);
}
 .author-title {
	 padding: 10px;
}
 .author-title .header-img {
	 display: inline-block;
	 vertical-align: top;
}
 .author-title .author-info {
	 display: inline-block;
	 margin-left: 5px;
	 width: 60%;
	 height: 40px;
	 line-height: 20px;
}
 .author-title .author-info >span {
	 display: block;
	 cursor: pointer;
	 overflow: hidden;
	 white-space: nowrap;
	 text-overflow: ellipsis;
}
 .author-title .author-info .author-name {
	 /* color: #000; */
     color:white;
	 font-size: 20px;
	 /* font-weight: bold; */
}
 .author-title .author-info .author-time {
	 font-size: 14px;
     color:rgba(51,159,205)
}
 .author-title .icon-btn {
	 width: 30%;
	 padding: 0 !important;
	 float: right;
}
 @media screen and (max-width: 1200px) {
	 .author-title .icon-btn {
		 width: 20%;
		 padding: 7px;
	}
}
 .author-title .icon-btn >span {
	 cursor: pointer;
}
 .author-title .icon-btn .iconfont {
	 margin: 0 5px;
}
 .author-title .talk-box {
	 margin: 0 50px;
}
 .author-title .talk-box >p {
	 margin: 0;
}
 .author-title .talk-box .reply {
	 font-size: 16px;
	 color: #000;
}
 .author-title .reply-box {
	 margin: 10px 0 0 50px;
	 background-color: #efefef;
}
replyInput::placeholder{
    font-size:20px
}
 
</style>
