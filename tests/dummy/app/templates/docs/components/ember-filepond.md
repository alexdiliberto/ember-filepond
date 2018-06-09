# ember-filepond

## Basic

{{#docs-demo as |demo|}}
  {{#demo.example name='demo-ember-filepond-basic.hbs'}}
    {{ember-filepond
      name="filepond-basic-uploader"
      labelIdle="<span class='text-purple'>Drag & Drop your files or <span class='filepond--label-action text-blue hover:text-blue-darkest'>Browse</span>!</span>"}}
  {{/demo.example}}
  
  {{demo.snippet 'demo-ember-filepond-basic.hbs'}}
{{/docs-demo}}

<!--
## One Plugin and Options

{{file-picker
  plugins=FilePondImagePreview}} 

## Many Plugins and Options<
{{file-picker
  name="my-filepond-uploader"
  accept="image/png"
  labelIdle='Drag & Drop your photo or <span class="filepond--label-action"> Browse </span>'
  imagePreviewHeight=170
  imageCropAspectRatio="1:1"
  imageResizeTargetWidth=200
  imageResizeTargetHeight=200
  allowMultiple=true
  allowRevert=true
  maxFiles=3
  server="http://localhost:3000/upload"
  instantUpload=false
  oninit=(action "oninit")
  plugins=(array
    FilePondImagePreview
    FilePondImageTransform
    FilePondImageCrop
    FilePondImageResize
    FilepondPluginFileValidateType
  )}}
-->
