draw2d.shape.node.vqfxCosim = draw2d.shape.node.wistarSetChild.extend({
    NAME: "draw2d.shape.node.vqfxCosim",
    INTERFACE_PREFIX: "xe-0/0/",
    MANAGEMENT_INTERFACE_PREFIX: "em",
    MANAGEMENT_INTERFACE_INDEX: 0,
    DOMAIN_CONFIGURATION_FILE: "junos_vqfx.xml",
    ICON_WIDTH: 50,
    ICON_HEIGHT: 40,
    ICON_FILE: "/static/images/vqfx_cosim.png",
    DUMMY_INTERFACE_LIST: [],
    COMPANION_TYPE: "draw2d.shape.node.vqfxRe",
    COMPANION_INTERFACE_LIST: ["1"],
    COMPANION_INTERFACE_MIRROR: true,
    COMPANION_INTERFACE_MIRROR_OFFSET: 19,
    VCPU: 1,
    VRAM: 2048,

});
