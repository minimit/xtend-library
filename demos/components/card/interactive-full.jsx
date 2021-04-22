import React from 'react'
export default function component() {
  return (
    <div>
      <div className="xt-row">
        <div className="w-full md:w-6/12">
          <a
            role="button"
            className="xt-card rounded-md text-black xt-links-default transform transition hover:bg-gray-200">
            <div className="text-base py-8 px-9">
              <div className="xt-h4">Default</div>
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu
                tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae
                magna eget, vehicula scelerisque elit.
              </p>
            </div>
          </a>
        </div>

        <div className="w-full md:w-6/12">
          <a
            role="button"
            className="xt-card rounded-md text-black xt-links-default transform transition hover:text-white hover:bg-primary-500">
            <div className="text-base py-8 px-9">
              <div className="xt-h4">Primary</div>
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu
                tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae
                magna eget, vehicula scelerisque elit.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}