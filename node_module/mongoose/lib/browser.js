/* eslint-env browser */

'use strict';

require('mongoose/lib/driver.js').set(require('mongoose/lib/drivers/browser/index.js'));

const DocumentProvider = require('mongoose/lib/documentProvider.js');

DocumentProvider.setBrowser(true);

/**
 * The [MongooseError](https://mongoosejs.com/docs/api/error.html#Error()) constructor.
 *
 * @method Error
 * @api public
 */

exports.Error = require('mongoose/lib/error/index.js');

/**
 * The Mongoose [Schema](https://mongoosejs.com/docs/api/schema.html#Schema()) constructor
 *
 * #### Example:
 *
 *     const mongoose = require('mongoose');
 *     const Schema = mongoose.Schema;
 *     const CatSchema = new Schema(..);
 *
 * @method Schema
 * @api public
 */

exports.Schema = require('mongoose/lib/schema.js');

/**
 * The various Mongoose Types.
 *
 * #### Example:
 *
 *     const mongoose = require('mongoose');
 *     const array = mongoose.Types.Array;
 *
 * #### Types:
 *
 * - [Array](https://mongoosejs.com/docs/schematypes.html#arrays)
 * - [Buffer](https://mongoosejs.com/docs/schematypes.html#buffers)
 * - [Embedded](https://mongoosejs.com/docs/schematypes.html#schemas)
 * - [DocumentArray](https://mongoosejs.com/docs/api/documentarraypath.html)
 * - [Decimal128](https://mongoosejs.com/docs/api/decimal128.html#Decimal128())
 * - [ObjectId](https://mongoosejs.com/docs/schematypes.html#objectids)
 * - [Map](https://mongoosejs.com/docs/schematypes.html#maps)
 * - [Subdocument](https://mongoosejs.com/docs/schematypes.html#schemas)
 *
 * Using this exposed access to the `ObjectId` type, we can construct ids on demand.
 *
 *     const ObjectId = mongoose.Types.ObjectId;
 *     const id1 = new ObjectId;
 *
 * @property Types
 * @api public
 */
exports.Types = require('mongoose/lib/types/index.js');

/**
 * The Mongoose [VirtualType](https://mongoosejs.com/docs/api/virtualtype.html#VirtualType()) constructor
 *
 * @method VirtualType
 * @api public
 */
exports.VirtualType = require('mongoose/lib/virtualType.js');

/**
 * The various Mongoose SchemaTypes.
 *
 * #### Note:
 *
 * _Alias of mongoose.Schema.Types for backwards compatibility._
 *
 * @property SchemaTypes
 * @see Schema.SchemaTypes https://mongoosejs.com/docs/api/schema.html#Schema.Types
 * @api public
 */

exports.SchemaType = require('mongoose/lib/schemaType.js');

/**
 * The constructor used for schematype options
 *
 * @method SchemaTypeOptions
 * @api public
 */

exports.SchemaTypeOptions = require('mongoose/lib/options/schemaTypeOptions.js');

/**
 * Internal utils
 *
 * @property utils
 * @api private
 */

exports.utils = require('mongoose/lib/utils.js');

/**
 * The Mongoose browser [Document](/api/document.html) constructor.
 *
 * @method Document
 * @api public
 */
exports.Document = DocumentProvider();

/**
 * Return a new browser model. In the browser, a model is just
 * a simplified document with a schema - it does **not** have
 * functions like `findOne()`, etc.
 *
 * @method model
 * @api public
 * @param {String} name
 * @param {Schema} schema
 * @return Class
 */
exports.model = function(name, schema) {
  class Model extends exports.Document {
    constructor(obj, fields) {
      super(obj, schema, fields);
    }
  }
  Model.modelName = name;

  return Model;
};

/*!
 * Module exports.
 */

if (typeof window !== 'undefined') {
  window.mongoose = module.exports;
  window.Buffer = Buffer;
}
