
// tslint:disable: max-line-length quotemark

export const dbModel = {
    "entities": [{
        "clrType": {
            "namespace": "AlbumContent",
            "name": "AlbumContent",
            "assembly": "EntityFrameworkCore.Diagrams.Demo.Models.AlbumContent, EntityFrameworkCore.Diagrams.Demo, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
            "genericTypeArguments": []
        },
        "properties": [{
            "clrType": {
                "namespace": "Int32",
                "name": "Int32",
                "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                "genericTypeArguments": []
            },
            "name": "AlbumId",
            "isConcurrencyToken": false,
            "isNullable": false,
            "isReadOnlyAfterSave": true,
            "isReadOnlyBeforeSave": false,
            "isShadowProperty": false,
            "isStoreGeneratedAlways": false,
            "requiresValueGenerator": false,
            "valueGenerated": 0
        }, {
            "clrType": {
                "namespace": "Int32",
                "name": "Int32",
                "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                "genericTypeArguments": []
            },
            "name": "ContentId",
            "isConcurrencyToken": false,
            "isNullable": false,
            "isReadOnlyAfterSave": true,
            "isReadOnlyBeforeSave": false,
            "isShadowProperty": false,
            "isStoreGeneratedAlways": false,
            "requiresValueGenerator": false,
            "valueGenerated": 0
        }],
        "keys": [{
            "properties": [{
                "clrType": {
                    "namespace": "Int32",
                    "name": "Int32",
                    "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                    "genericTypeArguments": []
                },
                "name": "AlbumId",
                "isConcurrencyToken": false,
                "isNullable": false,
                "isReadOnlyAfterSave": true,
                "isReadOnlyBeforeSave": false,
                "isShadowProperty": false,
                "isStoreGeneratedAlways": false,
                "requiresValueGenerator": false,
                "valueGenerated": 0
            }, {
                "clrType": {
                    "namespace": "Int32",
                    "name": "Int32",
                    "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                    "genericTypeArguments": []
                },
                "name": "ContentId",
                "isConcurrencyToken": false,
                "isNullable": false,
                "isReadOnlyAfterSave": true,
                "isReadOnlyBeforeSave": false,
                "isShadowProperty": false,
                "isStoreGeneratedAlways": false,
                "requiresValueGenerator": false,
                "valueGenerated": 0
            }]
        }],
        "foreignKeys": [{
            "principalEntity": {
                "clrType": {
                    "namespace": "Content",
                    "name": "Content",
                    "assembly": "EntityFrameworkCore.Diagrams.Demo.Models.Content, EntityFrameworkCore.Diagrams.Demo, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
                    "genericTypeArguments": []
                },
                "properties": [{
                    "clrType": {
                        "namespace": "Int32",
                        "name": "Int32",
                        "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                        "genericTypeArguments": []
                    },
                    "name": "Id",
                    "isConcurrencyToken": false,
                    "isNullable": false,
                    "isReadOnlyAfterSave": true,
                    "isReadOnlyBeforeSave": false,
                    "isShadowProperty": false,
                    "isStoreGeneratedAlways": false,
                    "requiresValueGenerator": true,
                    "valueGenerated": 1
                }, {
                    "clrType": {
                        "namespace": "DateTime",
                        "name": "DateTime",
                        "assembly": "System.DateTime, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                        "genericTypeArguments": []
                    },
                    "name": "CreatedAt",
                    "isConcurrencyToken": false,
                    "isNullable": false,
                    "isReadOnlyAfterSave": false,
                    "isReadOnlyBeforeSave": false,
                    "isShadowProperty": false,
                    "isStoreGeneratedAlways": false,
                    "requiresValueGenerator": false,
                    "valueGenerated": 0
                }, {
                    "clrType": {
                        "namespace": "String",
                        "name": "String",
                        "assembly": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                        "genericTypeArguments": []
                    },
                    "name": "MimeType",
                    "isConcurrencyToken": false,
                    "isNullable": true,
                    "isReadOnlyAfterSave": false,
                    "isReadOnlyBeforeSave": false,
                    "isShadowProperty": false,
                    "isStoreGeneratedAlways": false,
                    "requiresValueGenerator": false,
                    "valueGenerated": 0
                }, {
                    "clrType": {
                        "namespace": "String",
                        "name": "String",
                        "assembly": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                        "genericTypeArguments": []
                    },
                    "name": "Uri",
                    "isConcurrencyToken": false,
                    "isNullable": true,
                    "isReadOnlyAfterSave": false,
                    "isReadOnlyBeforeSave": false,
                    "isShadowProperty": false,
                    "isStoreGeneratedAlways": false,
                    "requiresValueGenerator": false,
                    "valueGenerated": 0
                }],
                "keys": [{
                    "properties": [{
                        "clrType": {
                            "namespace": "Int32",
                            "name": "Int32",
                            "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                            "genericTypeArguments": []
                        },
                        "name": "Id",
                        "isConcurrencyToken": false,
                        "isNullable": false,
                        "isReadOnlyAfterSave": true,
                        "isReadOnlyBeforeSave": false,
                        "isShadowProperty": false,
                        "isStoreGeneratedAlways": false,
                        "requiresValueGenerator": true,
                        "valueGenerated": 1
                    }]
                }],
                "foreignKeys": [],
                "indexes": [],
                "name": "EntityFrameworkCore.Diagrams.Demo.Models.Content"
            },
            "principalKey": {
                "properties": [{
                    "clrType": {
                        "namespace": "Int32",
                        "name": "Int32",
                        "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                        "genericTypeArguments": []
                    },
                    "name": "Id",
                    "isConcurrencyToken": false,
                    "isNullable": false,
                    "isReadOnlyAfterSave": true,
                    "isReadOnlyBeforeSave": false,
                    "isShadowProperty": false,
                    "isStoreGeneratedAlways": false,
                    "requiresValueGenerator": true,
                    "valueGenerated": 1
                }]
            },
            "properties": [{
                "clrType": {
                    "namespace": "Int32",
                    "name": "Int32",
                    "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                    "genericTypeArguments": []
                },
                "name": "AlbumId",
                "isConcurrencyToken": false,
                "isNullable": false,
                "isReadOnlyAfterSave": true,
                "isReadOnlyBeforeSave": false,
                "isShadowProperty": false,
                "isStoreGeneratedAlways": false,
                "requiresValueGenerator": false,
                "valueGenerated": 0
            }],
            "deleteBehavior": 2,
            "isRequired": true,
            "isUnique": false
        }, {
            "principalEntity": {
                "clrType": {
                    "namespace": "PhotoAlbum",
                    "name": "PhotoAlbum",
                    "assembly": "EntityFrameworkCore.Diagrams.Demo.Models.PhotoAlbum, EntityFrameworkCore.Diagrams.Demo, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
                    "genericTypeArguments": []
                },
                "properties": [{
                    "clrType": {
                        "namespace": "Int32",
                        "name": "Int32",
                        "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                        "genericTypeArguments": []
                    },
                    "name": "Id",
                    "isConcurrencyToken": false,
                    "isNullable": false,
                    "isReadOnlyAfterSave": true,
                    "isReadOnlyBeforeSave": false,
                    "isShadowProperty": false,
                    "isStoreGeneratedAlways": false,
                    "requiresValueGenerator": true,
                    "valueGenerated": 1
                }, {
                    "clrType": {
                        "namespace": "DateTime",
                        "name": "DateTime",
                        "assembly": "System.DateTime, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                        "genericTypeArguments": []
                    },
                    "name": "CreatedAt",
                    "isConcurrencyToken": false,
                    "isNullable": false,
                    "isReadOnlyAfterSave": false,
                    "isReadOnlyBeforeSave": false,
                    "isShadowProperty": false,
                    "isStoreGeneratedAlways": false,
                    "requiresValueGenerator": false,
                    "valueGenerated": 0
                }, {
                    "clrType": {
                        "namespace": "String",
                        "name": "String",
                        "assembly": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                        "genericTypeArguments": []
                    },
                    "name": "Description",
                    "isConcurrencyToken": false,
                    "isNullable": true,
                    "isReadOnlyAfterSave": false,
                    "isReadOnlyBeforeSave": false,
                    "isShadowProperty": false,
                    "isStoreGeneratedAlways": false,
                    "requiresValueGenerator": false,
                    "valueGenerated": 0
                }, {
                    "clrType": {
                        "namespace": "String",
                        "name": "String",
                        "assembly": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                        "genericTypeArguments": []
                    },
                    "name": "Name",
                    "isConcurrencyToken": false,
                    "isNullable": true,
                    "isReadOnlyAfterSave": false,
                    "isReadOnlyBeforeSave": false,
                    "isShadowProperty": false,
                    "isStoreGeneratedAlways": false,
                    "requiresValueGenerator": false,
                    "valueGenerated": 0
                }, {
                    "clrType": {
                        "namespace": "Int32",
                        "name": "Int32",
                        "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                        "genericTypeArguments": []
                    },
                    "name": "ProfileId",
                    "isConcurrencyToken": false,
                    "isNullable": false,
                    "isReadOnlyAfterSave": false,
                    "isReadOnlyBeforeSave": false,
                    "isShadowProperty": false,
                    "isStoreGeneratedAlways": false,
                    "requiresValueGenerator": false,
                    "valueGenerated": 0
                }],
                "keys": [{
                    "properties": [{
                        "clrType": {
                            "namespace": "Int32",
                            "name": "Int32",
                            "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                            "genericTypeArguments": []
                        },
                        "name": "Id",
                        "isConcurrencyToken": false,
                        "isNullable": false,
                        "isReadOnlyAfterSave": true,
                        "isReadOnlyBeforeSave": false,
                        "isShadowProperty": false,
                        "isStoreGeneratedAlways": false,
                        "requiresValueGenerator": true,
                        "valueGenerated": 1
                    }]
                }],
                "foreignKeys": [{
                    "principalEntity": {
                        "clrType": {
                            "namespace": "Profile",
                            "name": "Profile",
                            "assembly": "EntityFrameworkCore.Diagrams.Demo.Models.Profile, EntityFrameworkCore.Diagrams.Demo, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
                            "genericTypeArguments": []
                        },
                        "properties": [{
                            "clrType": {
                                "namespace": "Int32",
                                "name": "Int32",
                                "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                                "genericTypeArguments": []
                            },
                            "name": "Id",
                            "isConcurrencyToken": false,
                            "isNullable": false,
                            "isReadOnlyAfterSave": true,
                            "isReadOnlyBeforeSave": false,
                            "isShadowProperty": false,
                            "isStoreGeneratedAlways": false,
                            "requiresValueGenerator": true,
                            "valueGenerated": 1
                        }, {
                            "clrType": {
                                "namespace": "DateTime",
                                "name": "DateTime",
                                "assembly": "System.DateTime, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                                "genericTypeArguments": []
                            },
                            "name": "BirthDate",
                            "isConcurrencyToken": false,
                            "isNullable": false,
                            "isReadOnlyAfterSave": false,
                            "isReadOnlyBeforeSave": false,
                            "isShadowProperty": false,
                            "isStoreGeneratedAlways": false,
                            "requiresValueGenerator": false,
                            "valueGenerated": 0
                        }, {
                            "clrType": {
                                "namespace": "String",
                                "name": "String",
                                "assembly": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                                "genericTypeArguments": []
                            },
                            "name": "FirstName",
                            "isConcurrencyToken": false,
                            "isNullable": true,
                            "isReadOnlyAfterSave": false,
                            "isReadOnlyBeforeSave": false,
                            "isShadowProperty": false,
                            "isStoreGeneratedAlways": false,
                            "requiresValueGenerator": false,
                            "valueGenerated": 0
                        }, {
                            "clrType": {
                                "namespace": "String",
                                "name": "String",
                                "assembly": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                                "genericTypeArguments": []
                            },
                            "name": "LastName",
                            "isConcurrencyToken": false,
                            "isNullable": true,
                            "isReadOnlyAfterSave": false,
                            "isReadOnlyBeforeSave": false,
                            "isShadowProperty": false,
                            "isStoreGeneratedAlways": false,
                            "requiresValueGenerator": false,
                            "valueGenerated": 0
                        }, {
                            "clrType": {
                                "namespace": "String",
                                "name": "String",
                                "assembly": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                                "genericTypeArguments": []
                            },
                            "name": "MiddleName",
                            "isConcurrencyToken": false,
                            "isNullable": true,
                            "isReadOnlyAfterSave": false,
                            "isReadOnlyBeforeSave": false,
                            "isShadowProperty": false,
                            "isStoreGeneratedAlways": false,
                            "requiresValueGenerator": false,
                            "valueGenerated": 0
                        }],
                        "keys": [{
                            "properties": [{
                                "clrType": {
                                    "namespace": "Int32",
                                    "name": "Int32",
                                    "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                                    "genericTypeArguments": []
                                },
                                "name": "Id",
                                "isConcurrencyToken": false,
                                "isNullable": false,
                                "isReadOnlyAfterSave": true,
                                "isReadOnlyBeforeSave": false,
                                "isShadowProperty": false,
                                "isStoreGeneratedAlways": false,
                                "requiresValueGenerator": true,
                                "valueGenerated": 1
                            }]
                        }],
                        "foreignKeys": [],
                        "indexes": [],
                        "name": "EntityFrameworkCore.Diagrams.Demo.Models.Profile"
                    },
                    "principalKey": {
                        "properties": [{
                            "clrType": {
                                "namespace": "Int32",
                                "name": "Int32",
                                "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                                "genericTypeArguments": []
                            },
                            "name": "Id",
                            "isConcurrencyToken": false,
                            "isNullable": false,
                            "isReadOnlyAfterSave": true,
                            "isReadOnlyBeforeSave": false,
                            "isShadowProperty": false,
                            "isStoreGeneratedAlways": false,
                            "requiresValueGenerator": true,
                            "valueGenerated": 1
                        }]
                    },
                    "properties": [{
                        "clrType": {
                            "namespace": "Int32",
                            "name": "Int32",
                            "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                            "genericTypeArguments": []
                        },
                        "name": "ProfileId",
                        "isConcurrencyToken": false,
                        "isNullable": false,
                        "isReadOnlyAfterSave": false,
                        "isReadOnlyBeforeSave": false,
                        "isShadowProperty": false,
                        "isStoreGeneratedAlways": false,
                        "requiresValueGenerator": false,
                        "valueGenerated": 0
                    }],
                    "deleteBehavior": 2,
                    "isRequired": true,
                    "isUnique": false
                }],
                "indexes": [{
                    "properties": [{
                        "clrType": {
                            "namespace": "Int32",
                            "name": "Int32",
                            "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                            "genericTypeArguments": []
                        },
                        "name": "ProfileId",
                        "isConcurrencyToken": false,
                        "isNullable": false,
                        "isReadOnlyAfterSave": false,
                        "isReadOnlyBeforeSave": false,
                        "isShadowProperty": false,
                        "isStoreGeneratedAlways": false,
                        "requiresValueGenerator": false,
                        "valueGenerated": 0
                    }],
                    "isUnique": false
                }],
                "name": "EntityFrameworkCore.Diagrams.Demo.Models.PhotoAlbum"
            },
            "principalKey": {
                "properties": [{
                    "clrType": {
                        "namespace": "Int32",
                        "name": "Int32",
                        "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                        "genericTypeArguments": []
                    },
                    "name": "Id",
                    "isConcurrencyToken": false,
                    "isNullable": false,
                    "isReadOnlyAfterSave": true,
                    "isReadOnlyBeforeSave": false,
                    "isShadowProperty": false,
                    "isStoreGeneratedAlways": false,
                    "requiresValueGenerator": true,
                    "valueGenerated": 1
                }]
            },
            "properties": [{
                "clrType": {
                    "namespace": "Int32",
                    "name": "Int32",
                    "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                    "genericTypeArguments": []
                },
                "name": "AlbumId",
                "isConcurrencyToken": false,
                "isNullable": false,
                "isReadOnlyAfterSave": true,
                "isReadOnlyBeforeSave": false,
                "isShadowProperty": false,
                "isStoreGeneratedAlways": false,
                "requiresValueGenerator": false,
                "valueGenerated": 0
            }],
            "deleteBehavior": 2,
            "isRequired": true,
            "isUnique": false
        }],
        "indexes": [],
        "name": "EntityFrameworkCore.Diagrams.Demo.Models.AlbumContent"
    }, {
        "clrType": {
            "namespace": "AlbumContentComment",
            "name": "AlbumContentComment",
            "assembly": "EntityFrameworkCore.Diagrams.Demo.Models.AlbumContentComment, EntityFrameworkCore.Diagrams.Demo, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
            "genericTypeArguments": []
        },
        "properties": [{
            "clrType": {
                "namespace": "Int32",
                "name": "Int32",
                "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                "genericTypeArguments": []
            },
            "name": "AlbumId",
            "isConcurrencyToken": false,
            "isNullable": false,
            "isReadOnlyAfterSave": true,
            "isReadOnlyBeforeSave": false,
            "isShadowProperty": false,
            "isStoreGeneratedAlways": false,
            "requiresValueGenerator": false,
            "valueGenerated": 0
        }, {
            "clrType": {
                "namespace": "Int32",
                "name": "Int32",
                "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                "genericTypeArguments": []
            },
            "name": "ContentId",
            "isConcurrencyToken": false,
            "isNullable": false,
            "isReadOnlyAfterSave": true,
            "isReadOnlyBeforeSave": false,
            "isShadowProperty": false,
            "isStoreGeneratedAlways": false,
            "requiresValueGenerator": false,
            "valueGenerated": 0
        }, {
            "clrType": {
                "namespace": "Int32",
                "name": "Int32",
                "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                "genericTypeArguments": []
            },
            "name": "PostId",
            "isConcurrencyToken": false,
            "isNullable": false,
            "isReadOnlyAfterSave": true,
            "isReadOnlyBeforeSave": false,
            "isShadowProperty": false,
            "isStoreGeneratedAlways": false,
            "requiresValueGenerator": false,
            "valueGenerated": 0
        }],
        "keys": [{
            "properties": [{
                "clrType": {
                    "namespace": "Int32",
                    "name": "Int32",
                    "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                    "genericTypeArguments": []
                },
                "name": "AlbumId",
                "isConcurrencyToken": false,
                "isNullable": false,
                "isReadOnlyAfterSave": true,
                "isReadOnlyBeforeSave": false,
                "isShadowProperty": false,
                "isStoreGeneratedAlways": false,
                "requiresValueGenerator": false,
                "valueGenerated": 0
            }, {
                "clrType": {
                    "namespace": "Int32",
                    "name": "Int32",
                    "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                    "genericTypeArguments": []
                },
                "name": "ContentId",
                "isConcurrencyToken": false,
                "isNullable": false,
                "isReadOnlyAfterSave": true,
                "isReadOnlyBeforeSave": false,
                "isShadowProperty": false,
                "isStoreGeneratedAlways": false,
                "requiresValueGenerator": false,
                "valueGenerated": 0
            }, {
                "clrType": {
                    "namespace": "Int32",
                    "name": "Int32",
                    "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                    "genericTypeArguments": []
                },
                "name": "PostId",
                "isConcurrencyToken": false,
                "isNullable": false,
                "isReadOnlyAfterSave": true,
                "isReadOnlyBeforeSave": false,
                "isShadowProperty": false,
                "isStoreGeneratedAlways": false,
                "requiresValueGenerator": false,
                "valueGenerated": 0
            }]
        }],
        "foreignKeys": [{
            "principalEntity": {
                "clrType": {
                    "namespace": "Post",
                    "name": "Post",
                    "assembly": "EntityFrameworkCore.Diagrams.Demo.Models.Post, EntityFrameworkCore.Diagrams.Demo, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
                    "genericTypeArguments": []
                },
                "properties": [{
                    "clrType": {
                        "namespace": "Int32",
                        "name": "Int32",
                        "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                        "genericTypeArguments": []
                    },
                    "name": "Id",
                    "isConcurrencyToken": false,
                    "isNullable": false,
                    "isReadOnlyAfterSave": true,
                    "isReadOnlyBeforeSave": false,
                    "isShadowProperty": false,
                    "isStoreGeneratedAlways": false,
                    "requiresValueGenerator": true,
                    "valueGenerated": 1
                }, {
                    "clrType": {
                        "namespace": "Int32",
                        "name": "Int32",
                        "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                        "genericTypeArguments": []
                    },
                    "name": "AuthorId",
                    "isConcurrencyToken": false,
                    "isNullable": false,
                    "isReadOnlyAfterSave": false,
                    "isReadOnlyBeforeSave": false,
                    "isShadowProperty": false,
                    "isStoreGeneratedAlways": false,
                    "requiresValueGenerator": false,
                    "valueGenerated": 0
                }, {
                    "clrType": {
                        "namespace": "DateTime",
                        "name": "DateTime",
                        "assembly": "System.DateTime, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                        "genericTypeArguments": []
                    },
                    "name": "CreatedAt",
                    "isConcurrencyToken": false,
                    "isNullable": false,
                    "isReadOnlyAfterSave": false,
                    "isReadOnlyBeforeSave": false,
                    "isShadowProperty": false,
                    "isStoreGeneratedAlways": false,
                    "requiresValueGenerator": false,
                    "valueGenerated": 0
                }, {
                    "clrType": {
                        "namespace": "Int32",
                        "name": "Int32",
                        "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                        "genericTypeArguments": []
                    },
                    "name": "LikesCount",
                    "isConcurrencyToken": false,
                    "isNullable": false,
                    "isReadOnlyAfterSave": false,
                    "isReadOnlyBeforeSave": false,
                    "isShadowProperty": false,
                    "isStoreGeneratedAlways": false,
                    "requiresValueGenerator": false,
                    "valueGenerated": 0
                }, {
                    "clrType": {
                        "namespace": "String",
                        "name": "String",
                        "assembly": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                        "genericTypeArguments": []
                    },
                    "name": "Message",
                    "isConcurrencyToken": false,
                    "isNullable": true,
                    "isReadOnlyAfterSave": false,
                    "isReadOnlyBeforeSave": false,
                    "isShadowProperty": false,
                    "isStoreGeneratedAlways": false,
                    "requiresValueGenerator": false,
                    "valueGenerated": 0
                }],
                "keys": [{
                    "properties": [{
                        "clrType": {
                            "namespace": "Int32",
                            "name": "Int32",
                            "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                            "genericTypeArguments": []
                        },
                        "name": "Id",
                        "isConcurrencyToken": false,
                        "isNullable": false,
                        "isReadOnlyAfterSave": true,
                        "isReadOnlyBeforeSave": false,
                        "isShadowProperty": false,
                        "isStoreGeneratedAlways": false,
                        "requiresValueGenerator": true,
                        "valueGenerated": 1
                    }]
                }],
                "foreignKeys": [{
                    "principalEntity": {
                        "clrType": {
                            "namespace": "Profile",
                            "name": "Profile",
                            "assembly": "EntityFrameworkCore.Diagrams.Demo.Models.Profile, EntityFrameworkCore.Diagrams.Demo, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
                            "genericTypeArguments": []
                        },
                        "properties": [{
                            "clrType": {
                                "namespace": "Int32",
                                "name": "Int32",
                                "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                                "genericTypeArguments": []
                            },
                            "name": "Id",
                            "isConcurrencyToken": false,
                            "isNullable": false,
                            "isReadOnlyAfterSave": true,
                            "isReadOnlyBeforeSave": false,
                            "isShadowProperty": false,
                            "isStoreGeneratedAlways": false,
                            "requiresValueGenerator": true,
                            "valueGenerated": 1
                        }, {
                            "clrType": {
                                "namespace": "DateTime",
                                "name": "DateTime",
                                "assembly": "System.DateTime, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                                "genericTypeArguments": []
                            },
                            "name": "BirthDate",
                            "isConcurrencyToken": false,
                            "isNullable": false,
                            "isReadOnlyAfterSave": false,
                            "isReadOnlyBeforeSave": false,
                            "isShadowProperty": false,
                            "isStoreGeneratedAlways": false,
                            "requiresValueGenerator": false,
                            "valueGenerated": 0
                        }, {
                            "clrType": {
                                "namespace": "String",
                                "name": "String",
                                "assembly": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                                "genericTypeArguments": []
                            },
                            "name": "FirstName",
                            "isConcurrencyToken": false,
                            "isNullable": true,
                            "isReadOnlyAfterSave": false,
                            "isReadOnlyBeforeSave": false,
                            "isShadowProperty": false,
                            "isStoreGeneratedAlways": false,
                            "requiresValueGenerator": false,
                            "valueGenerated": 0
                        }, {
                            "clrType": {
                                "namespace": "String",
                                "name": "String",
                                "assembly": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                                "genericTypeArguments": []
                            },
                            "name": "LastName",
                            "isConcurrencyToken": false,
                            "isNullable": true,
                            "isReadOnlyAfterSave": false,
                            "isReadOnlyBeforeSave": false,
                            "isShadowProperty": false,
                            "isStoreGeneratedAlways": false,
                            "requiresValueGenerator": false,
                            "valueGenerated": 0
                        }, {
                            "clrType": {
                                "namespace": "String",
                                "name": "String",
                                "assembly": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                                "genericTypeArguments": []
                            },
                            "name": "MiddleName",
                            "isConcurrencyToken": false,
                            "isNullable": true,
                            "isReadOnlyAfterSave": false,
                            "isReadOnlyBeforeSave": false,
                            "isShadowProperty": false,
                            "isStoreGeneratedAlways": false,
                            "requiresValueGenerator": false,
                            "valueGenerated": 0
                        }],
                        "keys": [{
                            "properties": [{
                                "clrType": {
                                    "namespace": "Int32",
                                    "name": "Int32",
                                    "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                                    "genericTypeArguments": []
                                },
                                "name": "Id",
                                "isConcurrencyToken": false,
                                "isNullable": false,
                                "isReadOnlyAfterSave": true,
                                "isReadOnlyBeforeSave": false,
                                "isShadowProperty": false,
                                "isStoreGeneratedAlways": false,
                                "requiresValueGenerator": true,
                                "valueGenerated": 1
                            }]
                        }],
                        "foreignKeys": [],
                        "indexes": [],
                        "name": "EntityFrameworkCore.Diagrams.Demo.Models.Profile"
                    },
                    "principalKey": {
                        "properties": [{
                            "clrType": {
                                "namespace": "Int32",
                                "name": "Int32",
                                "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                                "genericTypeArguments": []
                            },
                            "name": "Id",
                            "isConcurrencyToken": false,
                            "isNullable": false,
                            "isReadOnlyAfterSave": true,
                            "isReadOnlyBeforeSave": false,
                            "isShadowProperty": false,
                            "isStoreGeneratedAlways": false,
                            "requiresValueGenerator": true,
                            "valueGenerated": 1
                        }]
                    },
                    "properties": [{
                        "clrType": {
                            "namespace": "Int32",
                            "name": "Int32",
                            "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                            "genericTypeArguments": []
                        },
                        "name": "AuthorId",
                        "isConcurrencyToken": false,
                        "isNullable": false,
                        "isReadOnlyAfterSave": false,
                        "isReadOnlyBeforeSave": false,
                        "isShadowProperty": false,
                        "isStoreGeneratedAlways": false,
                        "requiresValueGenerator": false,
                        "valueGenerated": 0
                    }],
                    "deleteBehavior": 2,
                    "isRequired": true,
                    "isUnique": false
                }],
                "indexes": [{
                    "properties": [{
                        "clrType": {
                            "namespace": "Int32",
                            "name": "Int32",
                            "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                            "genericTypeArguments": []
                        },
                        "name": "AuthorId",
                        "isConcurrencyToken": false,
                        "isNullable": false,
                        "isReadOnlyAfterSave": false,
                        "isReadOnlyBeforeSave": false,
                        "isShadowProperty": false,
                        "isStoreGeneratedAlways": false,
                        "requiresValueGenerator": false,
                        "valueGenerated": 0
                    }],
                    "isUnique": false
                }],
                "name": "EntityFrameworkCore.Diagrams.Demo.Models.Post"
            },
            "principalKey": {
                "properties": [{
                    "clrType": {
                        "namespace": "Int32",
                        "name": "Int32",
                        "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                        "genericTypeArguments": []
                    },
                    "name": "Id",
                    "isConcurrencyToken": false,
                    "isNullable": false,
                    "isReadOnlyAfterSave": true,
                    "isReadOnlyBeforeSave": false,
                    "isShadowProperty": false,
                    "isStoreGeneratedAlways": false,
                    "requiresValueGenerator": true,
                    "valueGenerated": 1
                }]
            },
            "properties": [{
                "clrType": {
                    "namespace": "Int32",
                    "name": "Int32",
                    "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                    "genericTypeArguments": []
                },
                "name": "PostId",
                "isConcurrencyToken": false,
                "isNullable": false,
                "isReadOnlyAfterSave": true,
                "isReadOnlyBeforeSave": false,
                "isShadowProperty": false,
                "isStoreGeneratedAlways": false,
                "requiresValueGenerator": false,
                "valueGenerated": 0
            }],
            "deleteBehavior": 2,
            "isRequired": true,
            "isUnique": false
        }, {
            "principalEntity": {
                "clrType": {
                    "namespace": "AlbumContent",
                    "name": "AlbumContent",
                    "assembly": "EntityFrameworkCore.Diagrams.Demo.Models.AlbumContent, EntityFrameworkCore.Diagrams.Demo, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
                    "genericTypeArguments": []
                },
                "properties": [{
                    "clrType": {
                        "namespace": "Int32",
                        "name": "Int32",
                        "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                        "genericTypeArguments": []
                    },
                    "name": "AlbumId",
                    "isConcurrencyToken": false,
                    "isNullable": false,
                    "isReadOnlyAfterSave": true,
                    "isReadOnlyBeforeSave": false,
                    "isShadowProperty": false,
                    "isStoreGeneratedAlways": false,
                    "requiresValueGenerator": false,
                    "valueGenerated": 0
                }, {
                    "clrType": {
                        "namespace": "Int32",
                        "name": "Int32",
                        "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                        "genericTypeArguments": []
                    },
                    "name": "ContentId",
                    "isConcurrencyToken": false,
                    "isNullable": false,
                    "isReadOnlyAfterSave": true,
                    "isReadOnlyBeforeSave": false,
                    "isShadowProperty": false,
                    "isStoreGeneratedAlways": false,
                    "requiresValueGenerator": false,
                    "valueGenerated": 0
                }],
                "keys": [{
                    "properties": [{
                        "clrType": {
                            "namespace": "Int32",
                            "name": "Int32",
                            "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                            "genericTypeArguments": []
                        },
                        "name": "AlbumId",
                        "isConcurrencyToken": false,
                        "isNullable": false,
                        "isReadOnlyAfterSave": true,
                        "isReadOnlyBeforeSave": false,
                        "isShadowProperty": false,
                        "isStoreGeneratedAlways": false,
                        "requiresValueGenerator": false,
                        "valueGenerated": 0
                    }, {
                        "clrType": {
                            "namespace": "Int32",
                            "name": "Int32",
                            "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                            "genericTypeArguments": []
                        },
                        "name": "ContentId",
                        "isConcurrencyToken": false,
                        "isNullable": false,
                        "isReadOnlyAfterSave": true,
                        "isReadOnlyBeforeSave": false,
                        "isShadowProperty": false,
                        "isStoreGeneratedAlways": false,
                        "requiresValueGenerator": false,
                        "valueGenerated": 0
                    }]
                }],
                "foreignKeys": [{
                    "principalEntity": {
                        "clrType": {
                            "namespace": "Content",
                            "name": "Content",
                            "assembly": "EntityFrameworkCore.Diagrams.Demo.Models.Content, EntityFrameworkCore.Diagrams.Demo, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
                            "genericTypeArguments": []
                        },
                        "properties": [{
                            "clrType": {
                                "namespace": "Int32",
                                "name": "Int32",
                                "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                                "genericTypeArguments": []
                            },
                            "name": "Id",
                            "isConcurrencyToken": false,
                            "isNullable": false,
                            "isReadOnlyAfterSave": true,
                            "isReadOnlyBeforeSave": false,
                            "isShadowProperty": false,
                            "isStoreGeneratedAlways": false,
                            "requiresValueGenerator": true,
                            "valueGenerated": 1
                        }, {
                            "clrType": {
                                "namespace": "DateTime",
                                "name": "DateTime",
                                "assembly": "System.DateTime, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                                "genericTypeArguments": []
                            },
                            "name": "CreatedAt",
                            "isConcurrencyToken": false,
                            "isNullable": false,
                            "isReadOnlyAfterSave": false,
                            "isReadOnlyBeforeSave": false,
                            "isShadowProperty": false,
                            "isStoreGeneratedAlways": false,
                            "requiresValueGenerator": false,
                            "valueGenerated": 0
                        }, {
                            "clrType": {
                                "namespace": "String",
                                "name": "String",
                                "assembly": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                                "genericTypeArguments": []
                            },
                            "name": "MimeType",
                            "isConcurrencyToken": false,
                            "isNullable": true,
                            "isReadOnlyAfterSave": false,
                            "isReadOnlyBeforeSave": false,
                            "isShadowProperty": false,
                            "isStoreGeneratedAlways": false,
                            "requiresValueGenerator": false,
                            "valueGenerated": 0
                        }, {
                            "clrType": {
                                "namespace": "String",
                                "name": "String",
                                "assembly": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                                "genericTypeArguments": []
                            },
                            "name": "Uri",
                            "isConcurrencyToken": false,
                            "isNullable": true,
                            "isReadOnlyAfterSave": false,
                            "isReadOnlyBeforeSave": false,
                            "isShadowProperty": false,
                            "isStoreGeneratedAlways": false,
                            "requiresValueGenerator": false,
                            "valueGenerated": 0
                        }],
                        "keys": [{
                            "properties": [{
                                "clrType": {
                                    "namespace": "Int32",
                                    "name": "Int32",
                                    "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                                    "genericTypeArguments": []
                                },
                                "name": "Id",
                                "isConcurrencyToken": false,
                                "isNullable": false,
                                "isReadOnlyAfterSave": true,
                                "isReadOnlyBeforeSave": false,
                                "isShadowProperty": false,
                                "isStoreGeneratedAlways": false,
                                "requiresValueGenerator": true,
                                "valueGenerated": 1
                            }]
                        }],
                        "foreignKeys": [],
                        "indexes": [],
                        "name": "EntityFrameworkCore.Diagrams.Demo.Models.Content"
                    },
                    "principalKey": {
                        "properties": [{
                            "clrType": {
                                "namespace": "Int32",
                                "name": "Int32",
                                "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                                "genericTypeArguments": []
                            },
                            "name": "Id",
                            "isConcurrencyToken": false,
                            "isNullable": false,
                            "isReadOnlyAfterSave": true,
                            "isReadOnlyBeforeSave": false,
                            "isShadowProperty": false,
                            "isStoreGeneratedAlways": false,
                            "requiresValueGenerator": true,
                            "valueGenerated": 1
                        }]
                    },
                    "properties": [{
                        "clrType": {
                            "namespace": "Int32",
                            "name": "Int32",
                            "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                            "genericTypeArguments": []
                        },
                        "name": "AlbumId",
                        "isConcurrencyToken": false,
                        "isNullable": false,
                        "isReadOnlyAfterSave": true,
                        "isReadOnlyBeforeSave": false,
                        "isShadowProperty": false,
                        "isStoreGeneratedAlways": false,
                        "requiresValueGenerator": false,
                        "valueGenerated": 0
                    }],
                    "deleteBehavior": 2,
                    "isRequired": true,
                    "isUnique": false
                }, {
                    "principalEntity": {
                        "clrType": {
                            "namespace": "PhotoAlbum",
                            "name": "PhotoAlbum",
                            "assembly": "EntityFrameworkCore.Diagrams.Demo.Models.PhotoAlbum, EntityFrameworkCore.Diagrams.Demo, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
                            "genericTypeArguments": []
                        },
                        "properties": [{
                            "clrType": {
                                "namespace": "Int32",
                                "name": "Int32",
                                "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                                "genericTypeArguments": []
                            },
                            "name": "Id",
                            "isConcurrencyToken": false,
                            "isNullable": false,
                            "isReadOnlyAfterSave": true,
                            "isReadOnlyBeforeSave": false,
                            "isShadowProperty": false,
                            "isStoreGeneratedAlways": false,
                            "requiresValueGenerator": true,
                            "valueGenerated": 1
                        }, {
                            "clrType": {
                                "namespace": "DateTime",
                                "name": "DateTime",
                                "assembly": "System.DateTime, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                                "genericTypeArguments": []
                            },
                            "name": "CreatedAt",
                            "isConcurrencyToken": false,
                            "isNullable": false,
                            "isReadOnlyAfterSave": false,
                            "isReadOnlyBeforeSave": false,
                            "isShadowProperty": false,
                            "isStoreGeneratedAlways": false,
                            "requiresValueGenerator": false,
                            "valueGenerated": 0
                        }, {
                            "clrType": {
                                "namespace": "String",
                                "name": "String",
                                "assembly": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                                "genericTypeArguments": []
                            },
                            "name": "Description",
                            "isConcurrencyToken": false,
                            "isNullable": true,
                            "isReadOnlyAfterSave": false,
                            "isReadOnlyBeforeSave": false,
                            "isShadowProperty": false,
                            "isStoreGeneratedAlways": false,
                            "requiresValueGenerator": false,
                            "valueGenerated": 0
                        }, {
                            "clrType": {
                                "namespace": "String",
                                "name": "String",
                                "assembly": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                                "genericTypeArguments": []
                            },
                            "name": "Name",
                            "isConcurrencyToken": false,
                            "isNullable": true,
                            "isReadOnlyAfterSave": false,
                            "isReadOnlyBeforeSave": false,
                            "isShadowProperty": false,
                            "isStoreGeneratedAlways": false,
                            "requiresValueGenerator": false,
                            "valueGenerated": 0
                        }, {
                            "clrType": {
                                "namespace": "Int32",
                                "name": "Int32",
                                "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                                "genericTypeArguments": []
                            },
                            "name": "ProfileId",
                            "isConcurrencyToken": false,
                            "isNullable": false,
                            "isReadOnlyAfterSave": false,
                            "isReadOnlyBeforeSave": false,
                            "isShadowProperty": false,
                            "isStoreGeneratedAlways": false,
                            "requiresValueGenerator": false,
                            "valueGenerated": 0
                        }],
                        "keys": [{
                            "properties": [{
                                "clrType": {
                                    "namespace": "Int32",
                                    "name": "Int32",
                                    "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                                    "genericTypeArguments": []
                                },
                                "name": "Id",
                                "isConcurrencyToken": false,
                                "isNullable": false,
                                "isReadOnlyAfterSave": true,
                                "isReadOnlyBeforeSave": false,
                                "isShadowProperty": false,
                                "isStoreGeneratedAlways": false,
                                "requiresValueGenerator": true,
                                "valueGenerated": 1
                            }]
                        }],
                        "foreignKeys": [{
                            "principalEntity": {
                                "clrType": {
                                    "namespace": "Profile",
                                    "name": "Profile",
                                    "assembly": "EntityFrameworkCore.Diagrams.Demo.Models.Profile, EntityFrameworkCore.Diagrams.Demo, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
                                    "genericTypeArguments": []
                                },
                                "properties": [{
                                    "clrType": {
                                        "namespace": "Int32",
                                        "name": "Int32",
                                        "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                                        "genericTypeArguments": []
                                    },
                                    "name": "Id",
                                    "isConcurrencyToken": false,
                                    "isNullable": false,
                                    "isReadOnlyAfterSave": true,
                                    "isReadOnlyBeforeSave": false,
                                    "isShadowProperty": false,
                                    "isStoreGeneratedAlways": false,
                                    "requiresValueGenerator": true,
                                    "valueGenerated": 1
                                }, {
                                    "clrType": {
                                        "namespace": "DateTime",
                                        "name": "DateTime",
                                        "assembly": "System.DateTime, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                                        "genericTypeArguments": []
                                    },
                                    "name": "BirthDate",
                                    "isConcurrencyToken": false,
                                    "isNullable": false,
                                    "isReadOnlyAfterSave": false,
                                    "isReadOnlyBeforeSave": false,
                                    "isShadowProperty": false,
                                    "isStoreGeneratedAlways": false,
                                    "requiresValueGenerator": false,
                                    "valueGenerated": 0
                                }, {
                                    "clrType": {
                                        "namespace": "String",
                                        "name": "String",
                                        "assembly": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                                        "genericTypeArguments": []
                                    },
                                    "name": "FirstName",
                                    "isConcurrencyToken": false,
                                    "isNullable": true,
                                    "isReadOnlyAfterSave": false,
                                    "isReadOnlyBeforeSave": false,
                                    "isShadowProperty": false,
                                    "isStoreGeneratedAlways": false,
                                    "requiresValueGenerator": false,
                                    "valueGenerated": 0
                                }, {
                                    "clrType": {
                                        "namespace": "String",
                                        "name": "String",
                                        "assembly": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                                        "genericTypeArguments": []
                                    },
                                    "name": "LastName",
                                    "isConcurrencyToken": false,
                                    "isNullable": true,
                                    "isReadOnlyAfterSave": false,
                                    "isReadOnlyBeforeSave": false,
                                    "isShadowProperty": false,
                                    "isStoreGeneratedAlways": false,
                                    "requiresValueGenerator": false,
                                    "valueGenerated": 0
                                }, {
                                    "clrType": {
                                        "namespace": "String",
                                        "name": "String",
                                        "assembly": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                                        "genericTypeArguments": []
                                    },
                                    "name": "MiddleName",
                                    "isConcurrencyToken": false,
                                    "isNullable": true,
                                    "isReadOnlyAfterSave": false,
                                    "isReadOnlyBeforeSave": false,
                                    "isShadowProperty": false,
                                    "isStoreGeneratedAlways": false,
                                    "requiresValueGenerator": false,
                                    "valueGenerated": 0
                                }],
                                "keys": [{
                                    "properties": [{
                                        "clrType": {
                                            "namespace": "Int32",
                                            "name": "Int32",
                                            "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                                            "genericTypeArguments": []
                                        },
                                        "name": "Id",
                                        "isConcurrencyToken": false,
                                        "isNullable": false,
                                        "isReadOnlyAfterSave": true,
                                        "isReadOnlyBeforeSave": false,
                                        "isShadowProperty": false,
                                        "isStoreGeneratedAlways": false,
                                        "requiresValueGenerator": true,
                                        "valueGenerated": 1
                                    }]
                                }],
                                "foreignKeys": [],
                                "indexes": [],
                                "name": "EntityFrameworkCore.Diagrams.Demo.Models.Profile"
                            },
                            "principalKey": {
                                "properties": [{
                                    "clrType": {
                                        "namespace": "Int32",
                                        "name": "Int32",
                                        "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                                        "genericTypeArguments": []
                                    },
                                    "name": "Id",
                                    "isConcurrencyToken": false,
                                    "isNullable": false,
                                    "isReadOnlyAfterSave": true,
                                    "isReadOnlyBeforeSave": false,
                                    "isShadowProperty": false,
                                    "isStoreGeneratedAlways": false,
                                    "requiresValueGenerator": true,
                                    "valueGenerated": 1
                                }]
                            },
                            "properties": [{
                                "clrType": {
                                    "namespace": "Int32",
                                    "name": "Int32",
                                    "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                                    "genericTypeArguments": []
                                },
                                "name": "ProfileId",
                                "isConcurrencyToken": false,
                                "isNullable": false,
                                "isReadOnlyAfterSave": false,
                                "isReadOnlyBeforeSave": false,
                                "isShadowProperty": false,
                                "isStoreGeneratedAlways": false,
                                "requiresValueGenerator": false,
                                "valueGenerated": 0
                            }],
                            "deleteBehavior": 2,
                            "isRequired": true,
                            "isUnique": false
                        }],
                        "indexes": [{
                            "properties": [{
                                "clrType": {
                                    "namespace": "Int32",
                                    "name": "Int32",
                                    "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                                    "genericTypeArguments": []
                                },
                                "name": "ProfileId",
                                "isConcurrencyToken": false,
                                "isNullable": false,
                                "isReadOnlyAfterSave": false,
                                "isReadOnlyBeforeSave": false,
                                "isShadowProperty": false,
                                "isStoreGeneratedAlways": false,
                                "requiresValueGenerator": false,
                                "valueGenerated": 0
                            }],
                            "isUnique": false
                        }],
                        "name": "EntityFrameworkCore.Diagrams.Demo.Models.PhotoAlbum"
                    },
                    "principalKey": {
                        "properties": [{
                            "clrType": {
                                "namespace": "Int32",
                                "name": "Int32",
                                "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                                "genericTypeArguments": []
                            },
                            "name": "Id",
                            "isConcurrencyToken": false,
                            "isNullable": false,
                            "isReadOnlyAfterSave": true,
                            "isReadOnlyBeforeSave": false,
                            "isShadowProperty": false,
                            "isStoreGeneratedAlways": false,
                            "requiresValueGenerator": true,
                            "valueGenerated": 1
                        }]
                    },
                    "properties": [{
                        "clrType": {
                            "namespace": "Int32",
                            "name": "Int32",
                            "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                            "genericTypeArguments": []
                        },
                        "name": "AlbumId",
                        "isConcurrencyToken": false,
                        "isNullable": false,
                        "isReadOnlyAfterSave": true,
                        "isReadOnlyBeforeSave": false,
                        "isShadowProperty": false,
                        "isStoreGeneratedAlways": false,
                        "requiresValueGenerator": false,
                        "valueGenerated": 0
                    }],
                    "deleteBehavior": 2,
                    "isRequired": true,
                    "isUnique": false
                }],
                "indexes": [],
                "name": "EntityFrameworkCore.Diagrams.Demo.Models.AlbumContent"
            },
            "principalKey": {
                "properties": [{
                    "clrType": {
                        "namespace": "Int32",
                        "name": "Int32",
                        "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                        "genericTypeArguments": []
                    },
                    "name": "AlbumId",
                    "isConcurrencyToken": false,
                    "isNullable": false,
                    "isReadOnlyAfterSave": true,
                    "isReadOnlyBeforeSave": false,
                    "isShadowProperty": false,
                    "isStoreGeneratedAlways": false,
                    "requiresValueGenerator": false,
                    "valueGenerated": 0
                }, {
                    "clrType": {
                        "namespace": "Int32",
                        "name": "Int32",
                        "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                        "genericTypeArguments": []
                    },
                    "name": "ContentId",
                    "isConcurrencyToken": false,
                    "isNullable": false,
                    "isReadOnlyAfterSave": true,
                    "isReadOnlyBeforeSave": false,
                    "isShadowProperty": false,
                    "isStoreGeneratedAlways": false,
                    "requiresValueGenerator": false,
                    "valueGenerated": 0
                }]
            },
            "properties": [{
                "clrType": {
                    "namespace": "Int32",
                    "name": "Int32",
                    "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                    "genericTypeArguments": []
                },
                "name": "AlbumId",
                "isConcurrencyToken": false,
                "isNullable": false,
                "isReadOnlyAfterSave": true,
                "isReadOnlyBeforeSave": false,
                "isShadowProperty": false,
                "isStoreGeneratedAlways": false,
                "requiresValueGenerator": false,
                "valueGenerated": 0
            }, {
                "clrType": {
                    "namespace": "Int32",
                    "name": "Int32",
                    "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                    "genericTypeArguments": []
                },
                "name": "ContentId",
                "isConcurrencyToken": false,
                "isNullable": false,
                "isReadOnlyAfterSave": true,
                "isReadOnlyBeforeSave": false,
                "isShadowProperty": false,
                "isStoreGeneratedAlways": false,
                "requiresValueGenerator": false,
                "valueGenerated": 0
            }],
            "deleteBehavior": 2,
            "isRequired": true,
            "isUnique": false
        }],
        "indexes": [{
            "properties": [{
                "clrType": {
                    "namespace": "Int32",
                    "name": "Int32",
                    "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                    "genericTypeArguments": []
                },
                "name": "PostId",
                "isConcurrencyToken": false,
                "isNullable": false,
                "isReadOnlyAfterSave": true,
                "isReadOnlyBeforeSave": false,
                "isShadowProperty": false,
                "isStoreGeneratedAlways": false,
                "requiresValueGenerator": false,
                "valueGenerated": 0
            }],
            "isUnique": false
        }],
        "name": "EntityFrameworkCore.Diagrams.Demo.Models.AlbumContentComment"
    }, {
        "clrType": {
            "namespace": "Content",
            "name": "Content",
            "assembly": "EntityFrameworkCore.Diagrams.Demo.Models.Content, EntityFrameworkCore.Diagrams.Demo, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
            "genericTypeArguments": []
        },
        "properties": [{
            "clrType": {
                "namespace": "Int32",
                "name": "Int32",
                "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                "genericTypeArguments": []
            },
            "name": "Id",
            "isConcurrencyToken": false,
            "isNullable": false,
            "isReadOnlyAfterSave": true,
            "isReadOnlyBeforeSave": false,
            "isShadowProperty": false,
            "isStoreGeneratedAlways": false,
            "requiresValueGenerator": true,
            "valueGenerated": 1
        }, {
            "clrType": {
                "namespace": "DateTime",
                "name": "DateTime",
                "assembly": "System.DateTime, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                "genericTypeArguments": []
            },
            "name": "CreatedAt",
            "isConcurrencyToken": false,
            "isNullable": false,
            "isReadOnlyAfterSave": false,
            "isReadOnlyBeforeSave": false,
            "isShadowProperty": false,
            "isStoreGeneratedAlways": false,
            "requiresValueGenerator": false,
            "valueGenerated": 0
        }, {
            "clrType": {
                "namespace": "String",
                "name": "String",
                "assembly": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                "genericTypeArguments": []
            },
            "name": "MimeType",
            "isConcurrencyToken": false,
            "isNullable": true,
            "isReadOnlyAfterSave": false,
            "isReadOnlyBeforeSave": false,
            "isShadowProperty": false,
            "isStoreGeneratedAlways": false,
            "requiresValueGenerator": false,
            "valueGenerated": 0
        }, {
            "clrType": {
                "namespace": "String",
                "name": "String",
                "assembly": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                "genericTypeArguments": []
            },
            "name": "Uri",
            "isConcurrencyToken": false,
            "isNullable": true,
            "isReadOnlyAfterSave": false,
            "isReadOnlyBeforeSave": false,
            "isShadowProperty": false,
            "isStoreGeneratedAlways": false,
            "requiresValueGenerator": false,
            "valueGenerated": 0
        }],
        "keys": [{
            "properties": [{
                "clrType": {
                    "namespace": "Int32",
                    "name": "Int32",
                    "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                    "genericTypeArguments": []
                },
                "name": "Id",
                "isConcurrencyToken": false,
                "isNullable": false,
                "isReadOnlyAfterSave": true,
                "isReadOnlyBeforeSave": false,
                "isShadowProperty": false,
                "isStoreGeneratedAlways": false,
                "requiresValueGenerator": true,
                "valueGenerated": 1
            }]
        }],
        "foreignKeys": [],
        "indexes": [],
        "name": "EntityFrameworkCore.Diagrams.Demo.Models.Content"
    }, {
        "clrType": {
            "namespace": "Friendship",
            "name": "Friendship",
            "assembly": "EntityFrameworkCore.Diagrams.Demo.Models.Friendship, EntityFrameworkCore.Diagrams.Demo, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
            "genericTypeArguments": []
        },
        "properties": [{
            "clrType": {
                "namespace": "Int32",
                "name": "Int32",
                "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                "genericTypeArguments": []
            },
            "name": "SourceProfileId",
            "isConcurrencyToken": false,
            "isNullable": false,
            "isReadOnlyAfterSave": true,
            "isReadOnlyBeforeSave": false,
            "isShadowProperty": false,
            "isStoreGeneratedAlways": false,
            "requiresValueGenerator": false,
            "valueGenerated": 0
        }, {
            "clrType": {
                "namespace": "Int32",
                "name": "Int32",
                "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                "genericTypeArguments": []
            },
            "name": "TargetProfileId",
            "isConcurrencyToken": false,
            "isNullable": false,
            "isReadOnlyAfterSave": true,
            "isReadOnlyBeforeSave": false,
            "isShadowProperty": false,
            "isStoreGeneratedAlways": false,
            "requiresValueGenerator": false,
            "valueGenerated": 0
        }, {
            "clrType": {
                "namespace": "Nullable`1",
                "name": "Nullable`1",
                "assembly": "System.Nullable`1[[System.DateTime, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]], System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                "genericTypeArguments": [{
                    "namespace": "DateTime",
                    "name": "DateTime",
                    "assembly": "System.DateTime, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                    "genericTypeArguments": []
                }]
            },
            "name": "ConfirmedAt",
            "isConcurrencyToken": false,
            "isNullable": true,
            "isReadOnlyAfterSave": false,
            "isReadOnlyBeforeSave": false,
            "isShadowProperty": false,
            "isStoreGeneratedAlways": false,
            "requiresValueGenerator": false,
            "valueGenerated": 0
        }, {
            "clrType": {
                "namespace": "DateTime",
                "name": "DateTime",
                "assembly": "System.DateTime, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                "genericTypeArguments": []
            },
            "name": "CreatedAt",
            "isConcurrencyToken": false,
            "isNullable": false,
            "isReadOnlyAfterSave": false,
            "isReadOnlyBeforeSave": false,
            "isShadowProperty": false,
            "isStoreGeneratedAlways": false,
            "requiresValueGenerator": false,
            "valueGenerated": 0
        }],
        "keys": [{
            "properties": [{
                "clrType": {
                    "namespace": "Int32",
                    "name": "Int32",
                    "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                    "genericTypeArguments": []
                },
                "name": "SourceProfileId",
                "isConcurrencyToken": false,
                "isNullable": false,
                "isReadOnlyAfterSave": true,
                "isReadOnlyBeforeSave": false,
                "isShadowProperty": false,
                "isStoreGeneratedAlways": false,
                "requiresValueGenerator": false,
                "valueGenerated": 0
            }, {
                "clrType": {
                    "namespace": "Int32",
                    "name": "Int32",
                    "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                    "genericTypeArguments": []
                },
                "name": "TargetProfileId",
                "isConcurrencyToken": false,
                "isNullable": false,
                "isReadOnlyAfterSave": true,
                "isReadOnlyBeforeSave": false,
                "isShadowProperty": false,
                "isStoreGeneratedAlways": false,
                "requiresValueGenerator": false,
                "valueGenerated": 0
            }]
        }],
        "foreignKeys": [{
            "principalEntity": {
                "clrType": {
                    "namespace": "Profile",
                    "name": "Profile",
                    "assembly": "EntityFrameworkCore.Diagrams.Demo.Models.Profile, EntityFrameworkCore.Diagrams.Demo, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
                    "genericTypeArguments": []
                },
                "properties": [{
                    "clrType": {
                        "namespace": "Int32",
                        "name": "Int32",
                        "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                        "genericTypeArguments": []
                    },
                    "name": "Id",
                    "isConcurrencyToken": false,
                    "isNullable": false,
                    "isReadOnlyAfterSave": true,
                    "isReadOnlyBeforeSave": false,
                    "isShadowProperty": false,
                    "isStoreGeneratedAlways": false,
                    "requiresValueGenerator": true,
                    "valueGenerated": 1
                }, {
                    "clrType": {
                        "namespace": "DateTime",
                        "name": "DateTime",
                        "assembly": "System.DateTime, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                        "genericTypeArguments": []
                    },
                    "name": "BirthDate",
                    "isConcurrencyToken": false,
                    "isNullable": false,
                    "isReadOnlyAfterSave": false,
                    "isReadOnlyBeforeSave": false,
                    "isShadowProperty": false,
                    "isStoreGeneratedAlways": false,
                    "requiresValueGenerator": false,
                    "valueGenerated": 0
                }, {
                    "clrType": {
                        "namespace": "String",
                        "name": "String",
                        "assembly": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                        "genericTypeArguments": []
                    },
                    "name": "FirstName",
                    "isConcurrencyToken": false,
                    "isNullable": true,
                    "isReadOnlyAfterSave": false,
                    "isReadOnlyBeforeSave": false,
                    "isShadowProperty": false,
                    "isStoreGeneratedAlways": false,
                    "requiresValueGenerator": false,
                    "valueGenerated": 0
                }, {
                    "clrType": {
                        "namespace": "String",
                        "name": "String",
                        "assembly": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                        "genericTypeArguments": []
                    },
                    "name": "LastName",
                    "isConcurrencyToken": false,
                    "isNullable": true,
                    "isReadOnlyAfterSave": false,
                    "isReadOnlyBeforeSave": false,
                    "isShadowProperty": false,
                    "isStoreGeneratedAlways": false,
                    "requiresValueGenerator": false,
                    "valueGenerated": 0
                }, {
                    "clrType": {
                        "namespace": "String",
                        "name": "String",
                        "assembly": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                        "genericTypeArguments": []
                    },
                    "name": "MiddleName",
                    "isConcurrencyToken": false,
                    "isNullable": true,
                    "isReadOnlyAfterSave": false,
                    "isReadOnlyBeforeSave": false,
                    "isShadowProperty": false,
                    "isStoreGeneratedAlways": false,
                    "requiresValueGenerator": false,
                    "valueGenerated": 0
                }],
                "keys": [{
                    "properties": [{
                        "clrType": {
                            "namespace": "Int32",
                            "name": "Int32",
                            "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                            "genericTypeArguments": []
                        },
                        "name": "Id",
                        "isConcurrencyToken": false,
                        "isNullable": false,
                        "isReadOnlyAfterSave": true,
                        "isReadOnlyBeforeSave": false,
                        "isShadowProperty": false,
                        "isStoreGeneratedAlways": false,
                        "requiresValueGenerator": true,
                        "valueGenerated": 1
                    }]
                }],
                "foreignKeys": [],
                "indexes": [],
                "name": "EntityFrameworkCore.Diagrams.Demo.Models.Profile"
            },
            "principalKey": {
                "properties": [{
                    "clrType": {
                        "namespace": "Int32",
                        "name": "Int32",
                        "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                        "genericTypeArguments": []
                    },
                    "name": "Id",
                    "isConcurrencyToken": false,
                    "isNullable": false,
                    "isReadOnlyAfterSave": true,
                    "isReadOnlyBeforeSave": false,
                    "isShadowProperty": false,
                    "isStoreGeneratedAlways": false,
                    "requiresValueGenerator": true,
                    "valueGenerated": 1
                }]
            },
            "properties": [{
                "clrType": {
                    "namespace": "Int32",
                    "name": "Int32",
                    "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                    "genericTypeArguments": []
                },
                "name": "SourceProfileId",
                "isConcurrencyToken": false,
                "isNullable": false,
                "isReadOnlyAfterSave": true,
                "isReadOnlyBeforeSave": false,
                "isShadowProperty": false,
                "isStoreGeneratedAlways": false,
                "requiresValueGenerator": false,
                "valueGenerated": 0
            }],
            "deleteBehavior": 2,
            "isRequired": true,
            "isUnique": false
        }, {
            "principalEntity": {
                "clrType": {
                    "namespace": "Profile",
                    "name": "Profile",
                    "assembly": "EntityFrameworkCore.Diagrams.Demo.Models.Profile, EntityFrameworkCore.Diagrams.Demo, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
                    "genericTypeArguments": []
                },
                "properties": [{
                    "clrType": {
                        "namespace": "Int32",
                        "name": "Int32",
                        "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                        "genericTypeArguments": []
                    },
                    "name": "Id",
                    "isConcurrencyToken": false,
                    "isNullable": false,
                    "isReadOnlyAfterSave": true,
                    "isReadOnlyBeforeSave": false,
                    "isShadowProperty": false,
                    "isStoreGeneratedAlways": false,
                    "requiresValueGenerator": true,
                    "valueGenerated": 1
                }, {
                    "clrType": {
                        "namespace": "DateTime",
                        "name": "DateTime",
                        "assembly": "System.DateTime, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                        "genericTypeArguments": []
                    },
                    "name": "BirthDate",
                    "isConcurrencyToken": false,
                    "isNullable": false,
                    "isReadOnlyAfterSave": false,
                    "isReadOnlyBeforeSave": false,
                    "isShadowProperty": false,
                    "isStoreGeneratedAlways": false,
                    "requiresValueGenerator": false,
                    "valueGenerated": 0
                }, {
                    "clrType": {
                        "namespace": "String",
                        "name": "String",
                        "assembly": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                        "genericTypeArguments": []
                    },
                    "name": "FirstName",
                    "isConcurrencyToken": false,
                    "isNullable": true,
                    "isReadOnlyAfterSave": false,
                    "isReadOnlyBeforeSave": false,
                    "isShadowProperty": false,
                    "isStoreGeneratedAlways": false,
                    "requiresValueGenerator": false,
                    "valueGenerated": 0
                }, {
                    "clrType": {
                        "namespace": "String",
                        "name": "String",
                        "assembly": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                        "genericTypeArguments": []
                    },
                    "name": "LastName",
                    "isConcurrencyToken": false,
                    "isNullable": true,
                    "isReadOnlyAfterSave": false,
                    "isReadOnlyBeforeSave": false,
                    "isShadowProperty": false,
                    "isStoreGeneratedAlways": false,
                    "requiresValueGenerator": false,
                    "valueGenerated": 0
                }, {
                    "clrType": {
                        "namespace": "String",
                        "name": "String",
                        "assembly": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                        "genericTypeArguments": []
                    },
                    "name": "MiddleName",
                    "isConcurrencyToken": false,
                    "isNullable": true,
                    "isReadOnlyAfterSave": false,
                    "isReadOnlyBeforeSave": false,
                    "isShadowProperty": false,
                    "isStoreGeneratedAlways": false,
                    "requiresValueGenerator": false,
                    "valueGenerated": 0
                }],
                "keys": [{
                    "properties": [{
                        "clrType": {
                            "namespace": "Int32",
                            "name": "Int32",
                            "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                            "genericTypeArguments": []
                        },
                        "name": "Id",
                        "isConcurrencyToken": false,
                        "isNullable": false,
                        "isReadOnlyAfterSave": true,
                        "isReadOnlyBeforeSave": false,
                        "isShadowProperty": false,
                        "isStoreGeneratedAlways": false,
                        "requiresValueGenerator": true,
                        "valueGenerated": 1
                    }]
                }],
                "foreignKeys": [],
                "indexes": [],
                "name": "EntityFrameworkCore.Diagrams.Demo.Models.Profile"
            },
            "principalKey": {
                "properties": [{
                    "clrType": {
                        "namespace": "Int32",
                        "name": "Int32",
                        "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                        "genericTypeArguments": []
                    },
                    "name": "Id",
                    "isConcurrencyToken": false,
                    "isNullable": false,
                    "isReadOnlyAfterSave": true,
                    "isReadOnlyBeforeSave": false,
                    "isShadowProperty": false,
                    "isStoreGeneratedAlways": false,
                    "requiresValueGenerator": true,
                    "valueGenerated": 1
                }]
            },
            "properties": [{
                "clrType": {
                    "namespace": "Int32",
                    "name": "Int32",
                    "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                    "genericTypeArguments": []
                },
                "name": "TargetProfileId",
                "isConcurrencyToken": false,
                "isNullable": false,
                "isReadOnlyAfterSave": true,
                "isReadOnlyBeforeSave": false,
                "isShadowProperty": false,
                "isStoreGeneratedAlways": false,
                "requiresValueGenerator": false,
                "valueGenerated": 0
            }],
            "deleteBehavior": 2,
            "isRequired": true,
            "isUnique": false
        }],
        "indexes": [{
            "properties": [{
                "clrType": {
                    "namespace": "Int32",
                    "name": "Int32",
                    "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                    "genericTypeArguments": []
                },
                "name": "TargetProfileId",
                "isConcurrencyToken": false,
                "isNullable": false,
                "isReadOnlyAfterSave": true,
                "isReadOnlyBeforeSave": false,
                "isShadowProperty": false,
                "isStoreGeneratedAlways": false,
                "requiresValueGenerator": false,
                "valueGenerated": 0
            }],
            "isUnique": false
        }],
        "name": "EntityFrameworkCore.Diagrams.Demo.Models.Friendship"
    }, {
        "clrType": {
            "namespace": "PhotoAlbum",
            "name": "PhotoAlbum",
            "assembly": "EntityFrameworkCore.Diagrams.Demo.Models.PhotoAlbum, EntityFrameworkCore.Diagrams.Demo, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
            "genericTypeArguments": []
        },
        "properties": [{
            "clrType": {
                "namespace": "Int32",
                "name": "Int32",
                "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                "genericTypeArguments": []
            },
            "name": "Id",
            "isConcurrencyToken": false,
            "isNullable": false,
            "isReadOnlyAfterSave": true,
            "isReadOnlyBeforeSave": false,
            "isShadowProperty": false,
            "isStoreGeneratedAlways": false,
            "requiresValueGenerator": true,
            "valueGenerated": 1
        }, {
            "clrType": {
                "namespace": "DateTime",
                "name": "DateTime",
                "assembly": "System.DateTime, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                "genericTypeArguments": []
            },
            "name": "CreatedAt",
            "isConcurrencyToken": false,
            "isNullable": false,
            "isReadOnlyAfterSave": false,
            "isReadOnlyBeforeSave": false,
            "isShadowProperty": false,
            "isStoreGeneratedAlways": false,
            "requiresValueGenerator": false,
            "valueGenerated": 0
        }, {
            "clrType": {
                "namespace": "String",
                "name": "String",
                "assembly": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                "genericTypeArguments": []
            },
            "name": "Description",
            "isConcurrencyToken": false,
            "isNullable": true,
            "isReadOnlyAfterSave": false,
            "isReadOnlyBeforeSave": false,
            "isShadowProperty": false,
            "isStoreGeneratedAlways": false,
            "requiresValueGenerator": false,
            "valueGenerated": 0
        }, {
            "clrType": {
                "namespace": "String",
                "name": "String",
                "assembly": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                "genericTypeArguments": []
            },
            "name": "Name",
            "isConcurrencyToken": false,
            "isNullable": true,
            "isReadOnlyAfterSave": false,
            "isReadOnlyBeforeSave": false,
            "isShadowProperty": false,
            "isStoreGeneratedAlways": false,
            "requiresValueGenerator": false,
            "valueGenerated": 0
        }, {
            "clrType": {
                "namespace": "Int32",
                "name": "Int32",
                "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                "genericTypeArguments": []
            },
            "name": "ProfileId",
            "isConcurrencyToken": false,
            "isNullable": false,
            "isReadOnlyAfterSave": false,
            "isReadOnlyBeforeSave": false,
            "isShadowProperty": false,
            "isStoreGeneratedAlways": false,
            "requiresValueGenerator": false,
            "valueGenerated": 0
        }],
        "keys": [{
            "properties": [{
                "clrType": {
                    "namespace": "Int32",
                    "name": "Int32",
                    "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                    "genericTypeArguments": []
                },
                "name": "Id",
                "isConcurrencyToken": false,
                "isNullable": false,
                "isReadOnlyAfterSave": true,
                "isReadOnlyBeforeSave": false,
                "isShadowProperty": false,
                "isStoreGeneratedAlways": false,
                "requiresValueGenerator": true,
                "valueGenerated": 1
            }]
        }],
        "foreignKeys": [{
            "principalEntity": {
                "clrType": {
                    "namespace": "Profile",
                    "name": "Profile",
                    "assembly": "EntityFrameworkCore.Diagrams.Demo.Models.Profile, EntityFrameworkCore.Diagrams.Demo, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
                    "genericTypeArguments": []
                },
                "properties": [{
                    "clrType": {
                        "namespace": "Int32",
                        "name": "Int32",
                        "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                        "genericTypeArguments": []
                    },
                    "name": "Id",
                    "isConcurrencyToken": false,
                    "isNullable": false,
                    "isReadOnlyAfterSave": true,
                    "isReadOnlyBeforeSave": false,
                    "isShadowProperty": false,
                    "isStoreGeneratedAlways": false,
                    "requiresValueGenerator": true,
                    "valueGenerated": 1
                }, {
                    "clrType": {
                        "namespace": "DateTime",
                        "name": "DateTime",
                        "assembly": "System.DateTime, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                        "genericTypeArguments": []
                    },
                    "name": "BirthDate",
                    "isConcurrencyToken": false,
                    "isNullable": false,
                    "isReadOnlyAfterSave": false,
                    "isReadOnlyBeforeSave": false,
                    "isShadowProperty": false,
                    "isStoreGeneratedAlways": false,
                    "requiresValueGenerator": false,
                    "valueGenerated": 0
                }, {
                    "clrType": {
                        "namespace": "String",
                        "name": "String",
                        "assembly": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                        "genericTypeArguments": []
                    },
                    "name": "FirstName",
                    "isConcurrencyToken": false,
                    "isNullable": true,
                    "isReadOnlyAfterSave": false,
                    "isReadOnlyBeforeSave": false,
                    "isShadowProperty": false,
                    "isStoreGeneratedAlways": false,
                    "requiresValueGenerator": false,
                    "valueGenerated": 0
                }, {
                    "clrType": {
                        "namespace": "String",
                        "name": "String",
                        "assembly": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                        "genericTypeArguments": []
                    },
                    "name": "LastName",
                    "isConcurrencyToken": false,
                    "isNullable": true,
                    "isReadOnlyAfterSave": false,
                    "isReadOnlyBeforeSave": false,
                    "isShadowProperty": false,
                    "isStoreGeneratedAlways": false,
                    "requiresValueGenerator": false,
                    "valueGenerated": 0
                }, {
                    "clrType": {
                        "namespace": "String",
                        "name": "String",
                        "assembly": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                        "genericTypeArguments": []
                    },
                    "name": "MiddleName",
                    "isConcurrencyToken": false,
                    "isNullable": true,
                    "isReadOnlyAfterSave": false,
                    "isReadOnlyBeforeSave": false,
                    "isShadowProperty": false,
                    "isStoreGeneratedAlways": false,
                    "requiresValueGenerator": false,
                    "valueGenerated": 0
                }],
                "keys": [{
                    "properties": [{
                        "clrType": {
                            "namespace": "Int32",
                            "name": "Int32",
                            "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                            "genericTypeArguments": []
                        },
                        "name": "Id",
                        "isConcurrencyToken": false,
                        "isNullable": false,
                        "isReadOnlyAfterSave": true,
                        "isReadOnlyBeforeSave": false,
                        "isShadowProperty": false,
                        "isStoreGeneratedAlways": false,
                        "requiresValueGenerator": true,
                        "valueGenerated": 1
                    }]
                }],
                "foreignKeys": [],
                "indexes": [],
                "name": "EntityFrameworkCore.Diagrams.Demo.Models.Profile"
            },
            "principalKey": {
                "properties": [{
                    "clrType": {
                        "namespace": "Int32",
                        "name": "Int32",
                        "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                        "genericTypeArguments": []
                    },
                    "name": "Id",
                    "isConcurrencyToken": false,
                    "isNullable": false,
                    "isReadOnlyAfterSave": true,
                    "isReadOnlyBeforeSave": false,
                    "isShadowProperty": false,
                    "isStoreGeneratedAlways": false,
                    "requiresValueGenerator": true,
                    "valueGenerated": 1
                }]
            },
            "properties": [{
                "clrType": {
                    "namespace": "Int32",
                    "name": "Int32",
                    "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                    "genericTypeArguments": []
                },
                "name": "ProfileId",
                "isConcurrencyToken": false,
                "isNullable": false,
                "isReadOnlyAfterSave": false,
                "isReadOnlyBeforeSave": false,
                "isShadowProperty": false,
                "isStoreGeneratedAlways": false,
                "requiresValueGenerator": false,
                "valueGenerated": 0
            }],
            "deleteBehavior": 2,
            "isRequired": true,
            "isUnique": false
        }],
        "indexes": [{
            "properties": [{
                "clrType": {
                    "namespace": "Int32",
                    "name": "Int32",
                    "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                    "genericTypeArguments": []
                },
                "name": "ProfileId",
                "isConcurrencyToken": false,
                "isNullable": false,
                "isReadOnlyAfterSave": false,
                "isReadOnlyBeforeSave": false,
                "isShadowProperty": false,
                "isStoreGeneratedAlways": false,
                "requiresValueGenerator": false,
                "valueGenerated": 0
            }],
            "isUnique": false
        }],
        "name": "EntityFrameworkCore.Diagrams.Demo.Models.PhotoAlbum"
    }, {
        "clrType": {
            "namespace": "Post",
            "name": "Post",
            "assembly": "EntityFrameworkCore.Diagrams.Demo.Models.Post, EntityFrameworkCore.Diagrams.Demo, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
            "genericTypeArguments": []
        },
        "properties": [{
            "clrType": {
                "namespace": "Int32",
                "name": "Int32",
                "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                "genericTypeArguments": []
            },
            "name": "Id",
            "isConcurrencyToken": false,
            "isNullable": false,
            "isReadOnlyAfterSave": true,
            "isReadOnlyBeforeSave": false,
            "isShadowProperty": false,
            "isStoreGeneratedAlways": false,
            "requiresValueGenerator": true,
            "valueGenerated": 1
        }, {
            "clrType": {
                "namespace": "Int32",
                "name": "Int32",
                "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                "genericTypeArguments": []
            },
            "name": "AuthorId",
            "isConcurrencyToken": false,
            "isNullable": false,
            "isReadOnlyAfterSave": false,
            "isReadOnlyBeforeSave": false,
            "isShadowProperty": false,
            "isStoreGeneratedAlways": false,
            "requiresValueGenerator": false,
            "valueGenerated": 0
        }, {
            "clrType": {
                "namespace": "DateTime",
                "name": "DateTime",
                "assembly": "System.DateTime, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                "genericTypeArguments": []
            },
            "name": "CreatedAt",
            "isConcurrencyToken": false,
            "isNullable": false,
            "isReadOnlyAfterSave": false,
            "isReadOnlyBeforeSave": false,
            "isShadowProperty": false,
            "isStoreGeneratedAlways": false,
            "requiresValueGenerator": false,
            "valueGenerated": 0
        }, {
            "clrType": {
                "namespace": "Int32",
                "name": "Int32",
                "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                "genericTypeArguments": []
            },
            "name": "LikesCount",
            "isConcurrencyToken": false,
            "isNullable": false,
            "isReadOnlyAfterSave": false,
            "isReadOnlyBeforeSave": false,
            "isShadowProperty": false,
            "isStoreGeneratedAlways": false,
            "requiresValueGenerator": false,
            "valueGenerated": 0
        }, {
            "clrType": {
                "namespace": "String",
                "name": "String",
                "assembly": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                "genericTypeArguments": []
            },
            "name": "Message",
            "isConcurrencyToken": false,
            "isNullable": true,
            "isReadOnlyAfterSave": false,
            "isReadOnlyBeforeSave": false,
            "isShadowProperty": false,
            "isStoreGeneratedAlways": false,
            "requiresValueGenerator": false,
            "valueGenerated": 0
        }],
        "keys": [{
            "properties": [{
                "clrType": {
                    "namespace": "Int32",
                    "name": "Int32",
                    "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                    "genericTypeArguments": []
                },
                "name": "Id",
                "isConcurrencyToken": false,
                "isNullable": false,
                "isReadOnlyAfterSave": true,
                "isReadOnlyBeforeSave": false,
                "isShadowProperty": false,
                "isStoreGeneratedAlways": false,
                "requiresValueGenerator": true,
                "valueGenerated": 1
            }]
        }],
        "foreignKeys": [{
            "principalEntity": {
                "clrType": {
                    "namespace": "Profile",
                    "name": "Profile",
                    "assembly": "EntityFrameworkCore.Diagrams.Demo.Models.Profile, EntityFrameworkCore.Diagrams.Demo, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
                    "genericTypeArguments": []
                },
                "properties": [{
                    "clrType": {
                        "namespace": "Int32",
                        "name": "Int32",
                        "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                        "genericTypeArguments": []
                    },
                    "name": "Id",
                    "isConcurrencyToken": false,
                    "isNullable": false,
                    "isReadOnlyAfterSave": true,
                    "isReadOnlyBeforeSave": false,
                    "isShadowProperty": false,
                    "isStoreGeneratedAlways": false,
                    "requiresValueGenerator": true,
                    "valueGenerated": 1
                }, {
                    "clrType": {
                        "namespace": "DateTime",
                        "name": "DateTime",
                        "assembly": "System.DateTime, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                        "genericTypeArguments": []
                    },
                    "name": "BirthDate",
                    "isConcurrencyToken": false,
                    "isNullable": false,
                    "isReadOnlyAfterSave": false,
                    "isReadOnlyBeforeSave": false,
                    "isShadowProperty": false,
                    "isStoreGeneratedAlways": false,
                    "requiresValueGenerator": false,
                    "valueGenerated": 0
                }, {
                    "clrType": {
                        "namespace": "String",
                        "name": "String",
                        "assembly": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                        "genericTypeArguments": []
                    },
                    "name": "FirstName",
                    "isConcurrencyToken": false,
                    "isNullable": true,
                    "isReadOnlyAfterSave": false,
                    "isReadOnlyBeforeSave": false,
                    "isShadowProperty": false,
                    "isStoreGeneratedAlways": false,
                    "requiresValueGenerator": false,
                    "valueGenerated": 0
                }, {
                    "clrType": {
                        "namespace": "String",
                        "name": "String",
                        "assembly": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                        "genericTypeArguments": []
                    },
                    "name": "LastName",
                    "isConcurrencyToken": false,
                    "isNullable": true,
                    "isReadOnlyAfterSave": false,
                    "isReadOnlyBeforeSave": false,
                    "isShadowProperty": false,
                    "isStoreGeneratedAlways": false,
                    "requiresValueGenerator": false,
                    "valueGenerated": 0
                }, {
                    "clrType": {
                        "namespace": "String",
                        "name": "String",
                        "assembly": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                        "genericTypeArguments": []
                    },
                    "name": "MiddleName",
                    "isConcurrencyToken": false,
                    "isNullable": true,
                    "isReadOnlyAfterSave": false,
                    "isReadOnlyBeforeSave": false,
                    "isShadowProperty": false,
                    "isStoreGeneratedAlways": false,
                    "requiresValueGenerator": false,
                    "valueGenerated": 0
                }],
                "keys": [{
                    "properties": [{
                        "clrType": {
                            "namespace": "Int32",
                            "name": "Int32",
                            "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                            "genericTypeArguments": []
                        },
                        "name": "Id",
                        "isConcurrencyToken": false,
                        "isNullable": false,
                        "isReadOnlyAfterSave": true,
                        "isReadOnlyBeforeSave": false,
                        "isShadowProperty": false,
                        "isStoreGeneratedAlways": false,
                        "requiresValueGenerator": true,
                        "valueGenerated": 1
                    }]
                }],
                "foreignKeys": [],
                "indexes": [],
                "name": "EntityFrameworkCore.Diagrams.Demo.Models.Profile"
            },
            "principalKey": {
                "properties": [{
                    "clrType": {
                        "namespace": "Int32",
                        "name": "Int32",
                        "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                        "genericTypeArguments": []
                    },
                    "name": "Id",
                    "isConcurrencyToken": false,
                    "isNullable": false,
                    "isReadOnlyAfterSave": true,
                    "isReadOnlyBeforeSave": false,
                    "isShadowProperty": false,
                    "isStoreGeneratedAlways": false,
                    "requiresValueGenerator": true,
                    "valueGenerated": 1
                }]
            },
            "properties": [{
                "clrType": {
                    "namespace": "Int32",
                    "name": "Int32",
                    "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                    "genericTypeArguments": []
                },
                "name": "AuthorId",
                "isConcurrencyToken": false,
                "isNullable": false,
                "isReadOnlyAfterSave": false,
                "isReadOnlyBeforeSave": false,
                "isShadowProperty": false,
                "isStoreGeneratedAlways": false,
                "requiresValueGenerator": false,
                "valueGenerated": 0
            }],
            "deleteBehavior": 2,
            "isRequired": true,
            "isUnique": false
        }],
        "indexes": [{
            "properties": [{
                "clrType": {
                    "namespace": "Int32",
                    "name": "Int32",
                    "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                    "genericTypeArguments": []
                },
                "name": "AuthorId",
                "isConcurrencyToken": false,
                "isNullable": false,
                "isReadOnlyAfterSave": false,
                "isReadOnlyBeforeSave": false,
                "isShadowProperty": false,
                "isStoreGeneratedAlways": false,
                "requiresValueGenerator": false,
                "valueGenerated": 0
            }],
            "isUnique": false
        }],
        "name": "EntityFrameworkCore.Diagrams.Demo.Models.Post"
    }, {
        "clrType": {
            "namespace": "PrivateMessage",
            "name": "PrivateMessage",
            "assembly": "EntityFrameworkCore.Diagrams.Demo.Models.PrivateMessage, EntityFrameworkCore.Diagrams.Demo, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
            "genericTypeArguments": []
        },
        "properties": [{
            "clrType": {
                "namespace": "Int32",
                "name": "Int32",
                "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                "genericTypeArguments": []
            },
            "name": "PostId",
            "isConcurrencyToken": false,
            "isNullable": false,
            "isReadOnlyAfterSave": true,
            "isReadOnlyBeforeSave": false,
            "isShadowProperty": false,
            "isStoreGeneratedAlways": false,
            "requiresValueGenerator": false,
            "valueGenerated": 0
        }, {
            "clrType": {
                "namespace": "Int32",
                "name": "Int32",
                "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                "genericTypeArguments": []
            },
            "name": "TargetProfileId",
            "isConcurrencyToken": false,
            "isNullable": false,
            "isReadOnlyAfterSave": true,
            "isReadOnlyBeforeSave": false,
            "isShadowProperty": false,
            "isStoreGeneratedAlways": false,
            "requiresValueGenerator": false,
            "valueGenerated": 0
        }],
        "keys": [{
            "properties": [{
                "clrType": {
                    "namespace": "Int32",
                    "name": "Int32",
                    "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                    "genericTypeArguments": []
                },
                "name": "PostId",
                "isConcurrencyToken": false,
                "isNullable": false,
                "isReadOnlyAfterSave": true,
                "isReadOnlyBeforeSave": false,
                "isShadowProperty": false,
                "isStoreGeneratedAlways": false,
                "requiresValueGenerator": false,
                "valueGenerated": 0
            }, {
                "clrType": {
                    "namespace": "Int32",
                    "name": "Int32",
                    "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                    "genericTypeArguments": []
                },
                "name": "TargetProfileId",
                "isConcurrencyToken": false,
                "isNullable": false,
                "isReadOnlyAfterSave": true,
                "isReadOnlyBeforeSave": false,
                "isShadowProperty": false,
                "isStoreGeneratedAlways": false,
                "requiresValueGenerator": false,
                "valueGenerated": 0
            }]
        }],
        "foreignKeys": [{
            "principalEntity": {
                "clrType": {
                    "namespace": "Post",
                    "name": "Post",
                    "assembly": "EntityFrameworkCore.Diagrams.Demo.Models.Post, EntityFrameworkCore.Diagrams.Demo, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
                    "genericTypeArguments": []
                },
                "properties": [{
                    "clrType": {
                        "namespace": "Int32",
                        "name": "Int32",
                        "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                        "genericTypeArguments": []
                    },
                    "name": "Id",
                    "isConcurrencyToken": false,
                    "isNullable": false,
                    "isReadOnlyAfterSave": true,
                    "isReadOnlyBeforeSave": false,
                    "isShadowProperty": false,
                    "isStoreGeneratedAlways": false,
                    "requiresValueGenerator": true,
                    "valueGenerated": 1
                }, {
                    "clrType": {
                        "namespace": "Int32",
                        "name": "Int32",
                        "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                        "genericTypeArguments": []
                    },
                    "name": "AuthorId",
                    "isConcurrencyToken": false,
                    "isNullable": false,
                    "isReadOnlyAfterSave": false,
                    "isReadOnlyBeforeSave": false,
                    "isShadowProperty": false,
                    "isStoreGeneratedAlways": false,
                    "requiresValueGenerator": false,
                    "valueGenerated": 0
                }, {
                    "clrType": {
                        "namespace": "DateTime",
                        "name": "DateTime",
                        "assembly": "System.DateTime, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                        "genericTypeArguments": []
                    },
                    "name": "CreatedAt",
                    "isConcurrencyToken": false,
                    "isNullable": false,
                    "isReadOnlyAfterSave": false,
                    "isReadOnlyBeforeSave": false,
                    "isShadowProperty": false,
                    "isStoreGeneratedAlways": false,
                    "requiresValueGenerator": false,
                    "valueGenerated": 0
                }, {
                    "clrType": {
                        "namespace": "Int32",
                        "name": "Int32",
                        "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                        "genericTypeArguments": []
                    },
                    "name": "LikesCount",
                    "isConcurrencyToken": false,
                    "isNullable": false,
                    "isReadOnlyAfterSave": false,
                    "isReadOnlyBeforeSave": false,
                    "isShadowProperty": false,
                    "isStoreGeneratedAlways": false,
                    "requiresValueGenerator": false,
                    "valueGenerated": 0
                }, {
                    "clrType": {
                        "namespace": "String",
                        "name": "String",
                        "assembly": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                        "genericTypeArguments": []
                    },
                    "name": "Message",
                    "isConcurrencyToken": false,
                    "isNullable": true,
                    "isReadOnlyAfterSave": false,
                    "isReadOnlyBeforeSave": false,
                    "isShadowProperty": false,
                    "isStoreGeneratedAlways": false,
                    "requiresValueGenerator": false,
                    "valueGenerated": 0
                }],
                "keys": [{
                    "properties": [{
                        "clrType": {
                            "namespace": "Int32",
                            "name": "Int32",
                            "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                            "genericTypeArguments": []
                        },
                        "name": "Id",
                        "isConcurrencyToken": false,
                        "isNullable": false,
                        "isReadOnlyAfterSave": true,
                        "isReadOnlyBeforeSave": false,
                        "isShadowProperty": false,
                        "isStoreGeneratedAlways": false,
                        "requiresValueGenerator": true,
                        "valueGenerated": 1
                    }]
                }],
                "foreignKeys": [{
                    "principalEntity": {
                        "clrType": {
                            "namespace": "Profile",
                            "name": "Profile",
                            "assembly": "EntityFrameworkCore.Diagrams.Demo.Models.Profile, EntityFrameworkCore.Diagrams.Demo, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
                            "genericTypeArguments": []
                        },
                        "properties": [{
                            "clrType": {
                                "namespace": "Int32",
                                "name": "Int32",
                                "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                                "genericTypeArguments": []
                            },
                            "name": "Id",
                            "isConcurrencyToken": false,
                            "isNullable": false,
                            "isReadOnlyAfterSave": true,
                            "isReadOnlyBeforeSave": false,
                            "isShadowProperty": false,
                            "isStoreGeneratedAlways": false,
                            "requiresValueGenerator": true,
                            "valueGenerated": 1
                        }, {
                            "clrType": {
                                "namespace": "DateTime",
                                "name": "DateTime",
                                "assembly": "System.DateTime, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                                "genericTypeArguments": []
                            },
                            "name": "BirthDate",
                            "isConcurrencyToken": false,
                            "isNullable": false,
                            "isReadOnlyAfterSave": false,
                            "isReadOnlyBeforeSave": false,
                            "isShadowProperty": false,
                            "isStoreGeneratedAlways": false,
                            "requiresValueGenerator": false,
                            "valueGenerated": 0
                        }, {
                            "clrType": {
                                "namespace": "String",
                                "name": "String",
                                "assembly": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                                "genericTypeArguments": []
                            },
                            "name": "FirstName",
                            "isConcurrencyToken": false,
                            "isNullable": true,
                            "isReadOnlyAfterSave": false,
                            "isReadOnlyBeforeSave": false,
                            "isShadowProperty": false,
                            "isStoreGeneratedAlways": false,
                            "requiresValueGenerator": false,
                            "valueGenerated": 0
                        }, {
                            "clrType": {
                                "namespace": "String",
                                "name": "String",
                                "assembly": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                                "genericTypeArguments": []
                            },
                            "name": "LastName",
                            "isConcurrencyToken": false,
                            "isNullable": true,
                            "isReadOnlyAfterSave": false,
                            "isReadOnlyBeforeSave": false,
                            "isShadowProperty": false,
                            "isStoreGeneratedAlways": false,
                            "requiresValueGenerator": false,
                            "valueGenerated": 0
                        }, {
                            "clrType": {
                                "namespace": "String",
                                "name": "String",
                                "assembly": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                                "genericTypeArguments": []
                            },
                            "name": "MiddleName",
                            "isConcurrencyToken": false,
                            "isNullable": true,
                            "isReadOnlyAfterSave": false,
                            "isReadOnlyBeforeSave": false,
                            "isShadowProperty": false,
                            "isStoreGeneratedAlways": false,
                            "requiresValueGenerator": false,
                            "valueGenerated": 0
                        }],
                        "keys": [{
                            "properties": [{
                                "clrType": {
                                    "namespace": "Int32",
                                    "name": "Int32",
                                    "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                                    "genericTypeArguments": []
                                },
                                "name": "Id",
                                "isConcurrencyToken": false,
                                "isNullable": false,
                                "isReadOnlyAfterSave": true,
                                "isReadOnlyBeforeSave": false,
                                "isShadowProperty": false,
                                "isStoreGeneratedAlways": false,
                                "requiresValueGenerator": true,
                                "valueGenerated": 1
                            }]
                        }],
                        "foreignKeys": [],
                        "indexes": [],
                        "name": "EntityFrameworkCore.Diagrams.Demo.Models.Profile"
                    },
                    "principalKey": {
                        "properties": [{
                            "clrType": {
                                "namespace": "Int32",
                                "name": "Int32",
                                "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                                "genericTypeArguments": []
                            },
                            "name": "Id",
                            "isConcurrencyToken": false,
                            "isNullable": false,
                            "isReadOnlyAfterSave": true,
                            "isReadOnlyBeforeSave": false,
                            "isShadowProperty": false,
                            "isStoreGeneratedAlways": false,
                            "requiresValueGenerator": true,
                            "valueGenerated": 1
                        }]
                    },
                    "properties": [{
                        "clrType": {
                            "namespace": "Int32",
                            "name": "Int32",
                            "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                            "genericTypeArguments": []
                        },
                        "name": "AuthorId",
                        "isConcurrencyToken": false,
                        "isNullable": false,
                        "isReadOnlyAfterSave": false,
                        "isReadOnlyBeforeSave": false,
                        "isShadowProperty": false,
                        "isStoreGeneratedAlways": false,
                        "requiresValueGenerator": false,
                        "valueGenerated": 0
                    }],
                    "deleteBehavior": 2,
                    "isRequired": true,
                    "isUnique": false
                }],
                "indexes": [{
                    "properties": [{
                        "clrType": {
                            "namespace": "Int32",
                            "name": "Int32",
                            "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                            "genericTypeArguments": []
                        },
                        "name": "AuthorId",
                        "isConcurrencyToken": false,
                        "isNullable": false,
                        "isReadOnlyAfterSave": false,
                        "isReadOnlyBeforeSave": false,
                        "isShadowProperty": false,
                        "isStoreGeneratedAlways": false,
                        "requiresValueGenerator": false,
                        "valueGenerated": 0
                    }],
                    "isUnique": false
                }],
                "name": "EntityFrameworkCore.Diagrams.Demo.Models.Post"
            },
            "principalKey": {
                "properties": [{
                    "clrType": {
                        "namespace": "Int32",
                        "name": "Int32",
                        "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                        "genericTypeArguments": []
                    },
                    "name": "Id",
                    "isConcurrencyToken": false,
                    "isNullable": false,
                    "isReadOnlyAfterSave": true,
                    "isReadOnlyBeforeSave": false,
                    "isShadowProperty": false,
                    "isStoreGeneratedAlways": false,
                    "requiresValueGenerator": true,
                    "valueGenerated": 1
                }]
            },
            "properties": [{
                "clrType": {
                    "namespace": "Int32",
                    "name": "Int32",
                    "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                    "genericTypeArguments": []
                },
                "name": "PostId",
                "isConcurrencyToken": false,
                "isNullable": false,
                "isReadOnlyAfterSave": true,
                "isReadOnlyBeforeSave": false,
                "isShadowProperty": false,
                "isStoreGeneratedAlways": false,
                "requiresValueGenerator": false,
                "valueGenerated": 0
            }],
            "deleteBehavior": 2,
            "isRequired": true,
            "isUnique": false
        }, {
            "principalEntity": {
                "clrType": {
                    "namespace": "Profile",
                    "name": "Profile",
                    "assembly": "EntityFrameworkCore.Diagrams.Demo.Models.Profile, EntityFrameworkCore.Diagrams.Demo, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
                    "genericTypeArguments": []
                },
                "properties": [{
                    "clrType": {
                        "namespace": "Int32",
                        "name": "Int32",
                        "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                        "genericTypeArguments": []
                    },
                    "name": "Id",
                    "isConcurrencyToken": false,
                    "isNullable": false,
                    "isReadOnlyAfterSave": true,
                    "isReadOnlyBeforeSave": false,
                    "isShadowProperty": false,
                    "isStoreGeneratedAlways": false,
                    "requiresValueGenerator": true,
                    "valueGenerated": 1
                }, {
                    "clrType": {
                        "namespace": "DateTime",
                        "name": "DateTime",
                        "assembly": "System.DateTime, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                        "genericTypeArguments": []
                    },
                    "name": "BirthDate",
                    "isConcurrencyToken": false,
                    "isNullable": false,
                    "isReadOnlyAfterSave": false,
                    "isReadOnlyBeforeSave": false,
                    "isShadowProperty": false,
                    "isStoreGeneratedAlways": false,
                    "requiresValueGenerator": false,
                    "valueGenerated": 0
                }, {
                    "clrType": {
                        "namespace": "String",
                        "name": "String",
                        "assembly": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                        "genericTypeArguments": []
                    },
                    "name": "FirstName",
                    "isConcurrencyToken": false,
                    "isNullable": true,
                    "isReadOnlyAfterSave": false,
                    "isReadOnlyBeforeSave": false,
                    "isShadowProperty": false,
                    "isStoreGeneratedAlways": false,
                    "requiresValueGenerator": false,
                    "valueGenerated": 0
                }, {
                    "clrType": {
                        "namespace": "String",
                        "name": "String",
                        "assembly": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                        "genericTypeArguments": []
                    },
                    "name": "LastName",
                    "isConcurrencyToken": false,
                    "isNullable": true,
                    "isReadOnlyAfterSave": false,
                    "isReadOnlyBeforeSave": false,
                    "isShadowProperty": false,
                    "isStoreGeneratedAlways": false,
                    "requiresValueGenerator": false,
                    "valueGenerated": 0
                }, {
                    "clrType": {
                        "namespace": "String",
                        "name": "String",
                        "assembly": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                        "genericTypeArguments": []
                    },
                    "name": "MiddleName",
                    "isConcurrencyToken": false,
                    "isNullable": true,
                    "isReadOnlyAfterSave": false,
                    "isReadOnlyBeforeSave": false,
                    "isShadowProperty": false,
                    "isStoreGeneratedAlways": false,
                    "requiresValueGenerator": false,
                    "valueGenerated": 0
                }],
                "keys": [{
                    "properties": [{
                        "clrType": {
                            "namespace": "Int32",
                            "name": "Int32",
                            "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                            "genericTypeArguments": []
                        },
                        "name": "Id",
                        "isConcurrencyToken": false,
                        "isNullable": false,
                        "isReadOnlyAfterSave": true,
                        "isReadOnlyBeforeSave": false,
                        "isShadowProperty": false,
                        "isStoreGeneratedAlways": false,
                        "requiresValueGenerator": true,
                        "valueGenerated": 1
                    }]
                }],
                "foreignKeys": [],
                "indexes": [],
                "name": "EntityFrameworkCore.Diagrams.Demo.Models.Profile"
            },
            "principalKey": {
                "properties": [{
                    "clrType": {
                        "namespace": "Int32",
                        "name": "Int32",
                        "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                        "genericTypeArguments": []
                    },
                    "name": "Id",
                    "isConcurrencyToken": false,
                    "isNullable": false,
                    "isReadOnlyAfterSave": true,
                    "isReadOnlyBeforeSave": false,
                    "isShadowProperty": false,
                    "isStoreGeneratedAlways": false,
                    "requiresValueGenerator": true,
                    "valueGenerated": 1
                }]
            },
            "properties": [{
                "clrType": {
                    "namespace": "Int32",
                    "name": "Int32",
                    "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                    "genericTypeArguments": []
                },
                "name": "TargetProfileId",
                "isConcurrencyToken": false,
                "isNullable": false,
                "isReadOnlyAfterSave": true,
                "isReadOnlyBeforeSave": false,
                "isShadowProperty": false,
                "isStoreGeneratedAlways": false,
                "requiresValueGenerator": false,
                "valueGenerated": 0
            }],
            "deleteBehavior": 2,
            "isRequired": true,
            "isUnique": false
        }],
        "indexes": [{
            "properties": [{
                "clrType": {
                    "namespace": "Int32",
                    "name": "Int32",
                    "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                    "genericTypeArguments": []
                },
                "name": "TargetProfileId",
                "isConcurrencyToken": false,
                "isNullable": false,
                "isReadOnlyAfterSave": true,
                "isReadOnlyBeforeSave": false,
                "isShadowProperty": false,
                "isStoreGeneratedAlways": false,
                "requiresValueGenerator": false,
                "valueGenerated": 0
            }],
            "isUnique": false
        }],
        "name": "EntityFrameworkCore.Diagrams.Demo.Models.PrivateMessage"
    }, {
        "clrType": {
            "namespace": "Profile",
            "name": "Profile",
            "assembly": "EntityFrameworkCore.Diagrams.Demo.Models.Profile, EntityFrameworkCore.Diagrams.Demo, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
            "genericTypeArguments": []
        },
        "properties": [{
            "clrType": {
                "namespace": "Int32",
                "name": "Int32",
                "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                "genericTypeArguments": []
            },
            "name": "Id",
            "isConcurrencyToken": false,
            "isNullable": false,
            "isReadOnlyAfterSave": true,
            "isReadOnlyBeforeSave": false,
            "isShadowProperty": false,
            "isStoreGeneratedAlways": false,
            "requiresValueGenerator": true,
            "valueGenerated": 1
        }, {
            "clrType": {
                "namespace": "DateTime",
                "name": "DateTime",
                "assembly": "System.DateTime, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                "genericTypeArguments": []
            },
            "name": "BirthDate",
            "isConcurrencyToken": false,
            "isNullable": false,
            "isReadOnlyAfterSave": false,
            "isReadOnlyBeforeSave": false,
            "isShadowProperty": false,
            "isStoreGeneratedAlways": false,
            "requiresValueGenerator": false,
            "valueGenerated": 0
        }, {
            "clrType": {
                "namespace": "String",
                "name": "String",
                "assembly": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                "genericTypeArguments": []
            },
            "name": "FirstName",
            "isConcurrencyToken": false,
            "isNullable": true,
            "isReadOnlyAfterSave": false,
            "isReadOnlyBeforeSave": false,
            "isShadowProperty": false,
            "isStoreGeneratedAlways": false,
            "requiresValueGenerator": false,
            "valueGenerated": 0
        }, {
            "clrType": {
                "namespace": "String",
                "name": "String",
                "assembly": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                "genericTypeArguments": []
            },
            "name": "LastName",
            "isConcurrencyToken": false,
            "isNullable": true,
            "isReadOnlyAfterSave": false,
            "isReadOnlyBeforeSave": false,
            "isShadowProperty": false,
            "isStoreGeneratedAlways": false,
            "requiresValueGenerator": false,
            "valueGenerated": 0
        }, {
            "clrType": {
                "namespace": "String",
                "name": "String",
                "assembly": "System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                "genericTypeArguments": []
            },
            "name": "MiddleName",
            "isConcurrencyToken": false,
            "isNullable": true,
            "isReadOnlyAfterSave": false,
            "isReadOnlyBeforeSave": false,
            "isShadowProperty": false,
            "isStoreGeneratedAlways": false,
            "requiresValueGenerator": false,
            "valueGenerated": 0
        }],
        "keys": [{
            "properties": [{
                "clrType": {
                    "namespace": "Int32",
                    "name": "Int32",
                    "assembly": "System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
                    "genericTypeArguments": []
                },
                "name": "Id",
                "isConcurrencyToken": false,
                "isNullable": false,
                "isReadOnlyAfterSave": true,
                "isReadOnlyBeforeSave": false,
                "isShadowProperty": false,
                "isStoreGeneratedAlways": false,
                "requiresValueGenerator": true,
                "valueGenerated": 1
            }]
        }],
        "foreignKeys": [],
        "indexes": [],
        "name": "EntityFrameworkCore.Diagrams.Demo.Models.Profile"
    }]
};

// tslint:enable: max-line-length quotemark
