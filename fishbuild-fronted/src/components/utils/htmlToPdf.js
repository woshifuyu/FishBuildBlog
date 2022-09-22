// 导出页面为PDF格式
import html2Canvas from 'html2canvas'
import JsPDF from 'jspdf'
export default{
  install (Vue, options) {
    Vue.prototype.getPdf = function () {
    //当点击下载pdf按钮不在页面顶部的时候会造成PDF样式不对
    //首先回到页面顶部在下载PDF
      let top = document.getElementById('pdfDom');
      if (top != null) {
        top.scrollIntoView();
        top = null;
      }
      var title = this.htmlTitle
      html2Canvas(document.querySelector('#pdfDom'), {
        allowTaint: true
      }).then(function (canvas) {

        var pdf = new JsPDF('p', 'mm', 'a4');    //A4纸，纵向
            var ctx = canvas.getContext('2d'),
                a4w = 380, a4h = 554,    //A4大小，210mm x 297mm，四边各保留10mm的边距，显示区域190x277
                imgHeight = Math.floor(a4h * canvas.width / a4w),    //按A4显示比例换算一页图像的像素高度
                renderedHeight = 0;

            while(renderedHeight < canvas.height) {
                var page = document.createElement("canvas");
                page.width = canvas.width;
                page.height = Math.min(imgHeight, canvas.height - renderedHeight);//可能内容不足一页

                //用getImageData剪裁指定区域，并画到前面创建的canvas对象中
                page.getContext('2d').putImageData(ctx.getImageData(0, renderedHeight, canvas.width, Math.min(imgHeight, canvas.height - renderedHeight)), 0, 0);
                pdf.addImage(page.toDataURL('image/jpeg', 1.0), 'JPEG', -90, 10, a4w, Math.min(a4h, a4w * page.height / page.width));    //添加图像到页面，保留10mm边距
                
                renderedHeight += imgHeight;
                if(renderedHeight < canvas.height)
                    pdf.addPage();//如果后面还有内容，添加一个空页
            }
            
            pdf.save(title + '.pdf')
      }
      )
    }
  }
}
