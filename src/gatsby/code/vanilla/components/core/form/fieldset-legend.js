import path from 'path'
const btnPrimary = require('components/snippets/classes/btn-primary').default
const labelDefault = require('components/snippets/classes/label-default').default
const inputDefault = require('components/snippets/classes/input-default').default
const checkDefault = require('components/snippets/classes/form-check-default').default
const note = require('components/snippets/classes/note').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<form>

  <fieldset>
    <div class="row row-x-6 row-y-4">

      <div class="w-full">
        <legend>Legend #1</legend>
      </div>

      <div class="w-full md:w-6/12">
        <label class="form-label mb-3 ${labelDefault()}">
          Lorem Ipsum
        </label>
        <input type="text" class="form-item rounded-md ${inputDefault()}" aria-label="Lorem ipsum"/>
        <div class="mt-3 ${note()}">
          <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
        </div>
      </div>

      <div class="w-full md:w-6/12">
        <label class="form-label mb-3 ${labelDefault()}">
          Dolor sit amet
        </label>
        <input type="text" class="form-item rounded-md ${inputDefault()}" aria-label="Dolor sit amet"/>
      </div>

      <div class="w-full">

        <div class="row row-x-6 row-y-4">

          <div class="w-full md:w-auto">
            <label class="form-label mb-3 ${labelDefault()}">
              Lorem ipsum
            </label>
            <input type="text" class="form-item rounded-md ${inputDefault()}" aria-label="Lorem ipsum"/>
          </div>

          <div class="w-full md:w-auto">
            <label class="form-label mb-3 ${labelDefault()}">
              Dolor sit amet
            </label>
            <input type="text" class="form-item rounded-md ${inputDefault()}" aria-label="Dolor sit amet"/>
          </div>

        </div>

        <div class="mt-3 ${note()}">
          <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
        </div>

      </div>

    </div>
  </fieldset>

  <fieldset>
    <div class="row row-x-6 row-y-4">

      <div class="w-full">
        <legend>Legend #2</legend>
      </div>

      <div class="w-full">

        <label class="form-label mb-3 ${labelDefault()}">
          Checkbox
        </label>

        <div class="row row-x-8 row-y-2">

          <div class="w-full">
            <label class="form-label-check">
              <input type="checkbox" class="form-check form-checkbox rounded-md ${checkDefault()}" checked>
              <span class="ml-3"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
            </label>
          </div>

          <div class="w-full">
            <label class="form-label-check">
              <input type="checkbox" class="form-check form-checkbox rounded-md ${checkDefault()}">
              <span class="ml-3"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
            </label>
            <div class="mt-3 ${note()}">
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
            </div>
          </div>

        </div>

      </div>

      <div class="w-full">
        <div class="row row-x-6 row-y-4">

          <div class="w-full md:w-2/12 md:self-baseline">
            <label class="form-label ${labelDefault()}">
              Checkbox
            </label>
          </div>

          <div class="w-full md:w-10/12">
            <div class="row row-x-8 row-y-2">

              <div class="w-full">
                <label class="form-label-check">
                  <input type="checkbox" class="form-check form-checkbox rounded-md ${checkDefault()}" checked>
                  <span class="ml-3"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
                </label>
              </div>

              <div class="w-full">
                <label class="form-label-check">
                  <input type="checkbox" class="form-check form-checkbox rounded-md ${checkDefault()}" checked>
                  <span class="ml-3"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
                </label>
                <div class="mt-3 ${note()}">
                  <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <div class="w-full">
        <legend>Legend #3</legend>
      </div>

      <div class="w-full">

        <label class="form-label mb-3 ${labelDefault()}">
          Checkbox
        </label>

        <div class="row row-x-8 row-y-2">

          <div class="w-full md:w-auto">
            <label class="form-label-check">
              <input type="checkbox" class="form-check form-checkbox rounded-md ${checkDefault()}" checked>
              <span class="ml-3">Lorem ipsum</span>
            </label>
          </div>

          <div class="w-full md:w-auto">
            <label class="form-label-check">
              <input type="checkbox" class="form-check form-checkbox rounded-md ${checkDefault()}">
              <span class="ml-3">Lorem ipsum</span>
            </label>
          </div>

        </div>

        <div class="mt-3 ${note()}">
          <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
        </div>

      </div>

      <div class="w-full">
        <button type="submit" class="btn text-xs py-2 px-3.5 rounded-md ${btnPrimary()}">
          submit
        </button>
      </div>

    </div>
  </fieldset>

</form>
`
